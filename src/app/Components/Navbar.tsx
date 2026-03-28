"use client"; 

import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-white backdrop-blur-md py-4 border-gray-100 ' 
          : 'bg-paper/40 backdrop-blur-sm py-5 border-white/10 text-white'
      }`}
    >
      <div className="w-11/12 mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
      <div className="flex-1">
          <h1 className="text-2xl md:text-4xl serif font-light tracking-widest uppercase">
            Aura
          </h1>
        </div>
        
        {/* Mobile Menu Button (LEFT side for better UX) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="#" className="hover:text-gold transition-colors">Collections</a>
          <a href="#" className="hover:text-gold transition-colors">Bespoke</a>
          <a href="#" className="hover:text-gold transition-colors">Our Story</a>
          <a href="#" className="hover:text-gold transition-colors">New Arrival</a>
        </div>

      
        

        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="hidden md:block hover:text-gold transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hidden md:block hover:text-gold transition-colors">
            <User size={20} strokeWidth={1.5} />
          </button>

          <button onClick={onCartClick} className="relative hover:text-gold transition-colors">
            <ShoppingBag size={20} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-paper z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end mb-12">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={32} strokeWidth={1} />
              </button>
            </div>

            <div className="flex flex-col space-y-8 text-2xl serif italic">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Collections</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Bespoke Services</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Our Heritage</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;