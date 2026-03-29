'use client';

import React from 'react';
import { motion } from 'framer-motion';

const products = [
    {
        id: 1,
        name: "Rose Gold Ring",
        price: "৳42,500",
        img: "https://i.imgur.com/kVJrnVk.jpeg",
    },
    {
        id: 2,
        name: "Royal Sapphire Pendant",
        price: "৳58,000",
        img: "https://i.imgur.com/wefpxTU.jpeg",
    },
];

export const Signature = () => {
    return (
        <div className="w-11/12 mx-auto mt-8 py-10">
            <div className="flex flex-col items-center text-center mb-10">
                <h4 className="italic text-yellow-600">Our Signature Collection</h4>
                <h2 className="text-4xl md:text-5xl text-gray-700 serif italic">
                    Timeless Elegance
                </h2>
            </div>
            <div className="flex flex-col md:flex-row gap-6">

                {products.map((item) => (
                    <motion.div
                        key={item.id}
                        whileHover={{ scale: 1.02 }}
                        className="relative w-full md:w-1/2 h-[300px] md:h-[400px] overflow-hidden shadow-lg group cursor-pointer"
                    >
                        {/* IMAGE */}
                        <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* DARK OVERLAY */}
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500" />

                        {/* HOVER CONTENT */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileHover={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4"
                        >
                            <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                                {item.name}
                            </h3>
                            <p className="text-sm mt-2 opacity-80">{item.price}</p>

                            <button className="mt-4 px-5 py-2 border border-white rounded-full text-sm hover:bg-white hover:text-black transition">
                                View Details
                            </button>
                        </motion.div>

                    </motion.div>
                ))}

            </div>
        </div>
    );
};