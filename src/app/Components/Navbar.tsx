"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X, Search, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
          ? 'bg-white backdrop-blur-md py-4 border-gray-100 '
          : 'bg-black backdrop-blur-sm py-5 border-white/10 text-white'
        }`}
    >
      <div className="w-11/12 mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/">
            <h1 className="text-2xl md:text-4xl serif font-light tracking-widest uppercase cursor-pointer">
              Aura
            </h1>
          </Link>
        </div>

        {/* Mobile Menu Button (LEFT side for better UX) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center justify-center space-x-8 text-xs uppercase tracking-[0.2em] font-medium">
          <a href="/collections" className="hover:text-gold transition-colors">Collections</a>
          <a href="/glowByMoment" className="hover:text-gold transition-colors">Glow By Moment</a>
          <a href="/ourStory" className="hover:text-gold transition-colors">Our Story</a>
          <a href="/newArrivals" className="hover:text-gold transition-colors">New Arrival</a>
        </div>




        {/* Icons */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <button className="hidden md:block hover:text-gold transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <Link href="/login" className="hidden md:block hover:text-gold transition-colors">
            <User size={20} strokeWidth={1.5} />
          </Link>

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
            className="fixed top-0 right-0 h-full w-64 sm:w-72 bg-black text-white z-[60] flex flex-col p-6 shadow-2xl rounded-l-2xl"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-black hover:text-yellow-500 transition-colors">
                <X size={28} strokeWidth={1} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col bg-white text-black space-y-6">
              <a href="/collections" className="text-black text-md pl-4 pt-3 font-medium hover:bg-yellow-500 hover:text-white transition-colors">Collections</a>
              <a href="/glowByMoment" className="text-black text-md pl-4 pt-3 hover:bg-yellow-500 hover:text-white transition-colors">Glow By Moment</a>
              <a href="/ourStory" className="text-black text-md pl-4 pt-3 hover:bg-yellow-500 hover:text-white transition-colors">Our Story</a>
              <a href="/newArrivals" className="text-black text-md pl-4 pt-3 hover:bg-yellow-500 hover:text-white transition-colors">New Arrival</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;