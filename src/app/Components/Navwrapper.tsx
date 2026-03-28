// NavbarWrapper.tsx
"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount] = useState(3);
  useEffect(() => {
  const handleClickOutside = () => setIsCartOpen(false);
  if (isCartOpen) {
    document.addEventListener("click", handleClickOutside);
  }
  return () => document.removeEventListener("click", handleClickOutside);
}, [isCartOpen]);

  return (
    <>
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(prev => !prev)} 
      />

      
      {isCartOpen && (
        <div className="fixed top-20 right-4 bg-white shadow-lg p-4 z-50">
          <button className="text-sm tracking-wider border border-gray-300 px-3 py-2 hover:bg-black hover:text-white transition-all duration-300 mb-4" onClick={() => setIsCartOpen(false)}>Close</button>
          <p>Your Cart 🛒</p>
        </div>
      )}
    </>
  );
};

export default NavbarWrapper;