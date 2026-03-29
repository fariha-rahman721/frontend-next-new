import { RotateCcw, ShieldCheck, Star, Truck } from 'lucide-react';
import React from 'react';

const OurStory = () => {
    return (
       <section id="heritage" className="py-32 bg-paper">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
    
    {/* Images */}
    <div className="relative order-2 md:order-1">
      <div className="w-full max-w-[350px] md:max-w-[400px] mx-auto aspect-[3/4] overflow-hidden rounded-t-full">
        <img 
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000" 
          alt="Craftsmanship"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="absolute -bottom-6 -right-6 w-40 h-40 md:w-64 md:h-64 bg-paper p-2 md:p-4 shadow-2xl hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1531995811006-35cb42e1a022?auto=format&fit=crop&q=80&w=500" 
          alt="Detail"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>

    {/* Text content */}
    <div className="order-1 md:order-2">
      <span className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4 block">
        Our Heritage
      </span>
      <h2 className="text-3xl md:text-5xl serif italic mb-6 md:mb-8 leading-tight">
        The Art of Fine Craftsmanship
      </h2>
      <p className="text-gray-600 font-light leading-relaxed mb-6 md:mb-8">
        Every Aura piece is a testament to the skill of our master artisans. We source only the most exceptional ethically-mined gemstones and precious metals, ensuring that each creation is not just jewellery, but a legacy to be passed down through generations.
      </p>

      {/* Feature grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10">
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <ShieldCheck className="text-yellow-600" size={20} />
          <span className="text-xs uppercase tracking-widest font-medium">Certified Quality</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Truck className="text-yellow-600" size={20} />
          <span className="text-xs uppercase tracking-widest font-medium">Global Shipping</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <RotateCcw className="text-yellow-600" size={20} />
          <span className="text-xs uppercase tracking-widest font-medium">Easy Returns</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
          <Star className="text-yellow-600" size={20} />
          <span className="text-xs uppercase tracking-widest font-medium">Expert Care</span>
        </div>
      </div>

      {/* Button */}
      <button className="px-8 md:px-10 py-3 md:py-4 border border-ink text-ink text-xs uppercase tracking-widest font-semibold hover:bg-yellow-600 hover:text-white transition-all duration-500 rounded-full">
        Our Story
      </button>
    </div>
    
  </div>
</section>
    );
};

export default OurStory;