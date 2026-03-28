import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';

import { FaInstagram, FaSquareXTwitter } from "react-icons/fa6";
import { IoMdMail } from 'react-icons/io';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="w-11/12 mx-auto px-6 p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl serif tracking-widest uppercase mb-6">Aura</h2>
            <p className="text-sm font-light text-gray-400 leading-relaxed mb-8">
              Crafting moments of eternal beauty through artisanal jewellery since 1992.
            </p>
            <div className="flex space-x-4">
              <FaInstagram size={20} className="text-gray-400 hover:text-gold cursor-pointer transition-colors" />
              <FaFacebookSquare size={20} className="text-gray-400 hover:text-gold cursor-pointer transition-colors" />
              <FaSquareXTwitter size={20} className="text-gray-400 hover:text-gold cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8">Collections</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Engagement Rings</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Fine Necklaces</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Luxury Watches</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Limited Editions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8">Client Care</h4>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li><a href="#" className="hover:text-gold transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Care Instructions</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Book an Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8">Newsletter</h4>
            <p className="text-sm font-light text-gray-400 mb-6">
              Join our inner circle for exclusive previews and heritage stories.
            </p>
            <div className="flex border-b border-gray-700 pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none outline-none text-sm w-full font-light"
              />
              <button className="text-gold">
                <IoMdMail size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-gray-500">
            © 2026 Aura Fine Jewellery. All Rights Reserved.
          </p>
          <div className="flex space-x-6 text-[10px] uppercase tracking-widest text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
