'use client';
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, Bot } from 'lucide-react';


export const AIChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to Aura. How can I assist you with our collection today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ✅ auto scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages]);

  // ✅ focus input when open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await aiService.chat(userMsg);

      setMessages(prev => [
        ...prev,
        { role: 'bot', text: response?.data?.data || 'No response received.' }
      ]);
    } catch (error) {
      setMessages(prev => [
        ...prev,
        { role: 'bot', text: "I'm having trouble connecting right now. Please try again later." }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-black text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform z-40"
      >
        <MessageSquare size={22} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-4 sm:right-6 md:right-8 w-[90%] sm:max-w-[300px] md:max-w-[350px] h-[60vh] sm:h-[480px] md:h-[500px] bg-black shadow-2xl rounded-2xl z-50 flex flex-col overflow-hidden border border-gray-100"
          >
            {/* HEADER */}
            <div className="p-4 bg-black text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot size={18} className="text-black" />
                <span className="text-sm font-semibold">Aura Assistant</span>
              </div>

              <button onClick={() => setIsOpen(false)}>
                <X size={18} />
              </button>
            </div>

            {/* CHAT AREA */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50"
            >
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${msg.role === 'user'
                        ? 'bg-yellow-600 text-white rounded-tr-none'
                        : 'bg-white text-black shadow-sm rounded-tl-none'
                      }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* TYPING LOADER */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white px-3 py-2 rounded-2xl shadow-sm rounded-tl-none">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* INPUT */}
            <div className="p-3 border-t flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about jewellery..."
                className="flex-1 bg-gray-100 px-3 py-2 rounded-full text-sm outline-none"
              />

              <button
                onClick={handleSend}
                disabled={isLoading}
                className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gold transition disabled:opacity-50"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};