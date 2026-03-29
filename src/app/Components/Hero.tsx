'use client';
import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center pt-16 sm:pt-20">
  <div className="absolute inset-0 z-0 opacity-100">
    <img 
      src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=2000" 
      alt="Luxury Jewellery Background"
      className="w-full h-full object-cover scale-100"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-black/30" />
  </div>

  <div className="relative z-10 text-center text-white px-6">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-paper/40 backdrop-blur-sm py-5 border-white/10 text-white p-8 rounded-md mb-10">
        <span className="text-sm uppercase tracking-[0.4em] font-medium mb-6 block">
          The 2026 Collection
        </span>
        <h2 className="text-xl mt-4 md:text-7xl serif italic font-light lg:mb-8 leading-tight">
          Timeless Radiance
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-base font-light tracking-wide opacity-90 mb-10">
          Discover our latest curation of handcrafted masterpieces, where every diamond tells a story of eternal elegance.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <button className="w-full sm:w-auto px-12 py-5 bg-yellow-600 text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white hover:text-black transition-all duration-500 rounded-sm shadow-2xl">
          View Collections
        </button>
        <button className="w-full sm:w-auto px-12 py-5 border border-white/40 text-white text-xs uppercase tracking-[0.2em] font-bold hover:bg-white/10 transition-all duration-500 rounded-sm backdrop-blur-md">
          Private Consultation
        </button>
      </div>
    </motion.div>
  </div>

  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
    <span className="text-[10px] uppercase backdrop-blur-sm p-2 tracking-[0.3em] text-white font-bold">Scroll to discover</span>
    <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
  </div>
</section>
  );
};
