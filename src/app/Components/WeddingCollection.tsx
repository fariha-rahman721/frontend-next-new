'use client';

import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

interface WeddingItem {
    _id: string;
    title: string;
    price: number;
    img: string;
    description: string;
    category: string;
}

const WeddingCollection = () => {
    const [data, setData] = useState<WeddingItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/wedding`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${ res.status }`);
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching wedding items:", err));
    }, []);
    if (loading) {
        return <div className="text-center pt-40">Loading...</div>;
    }

    return (
        <div className="pt-32 pb-20 bg-paper">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-24">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[10px] uppercase tracking-[0.5em] text-gold font-bold mb-4 block"
                    >
                        Curated For You
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl serif italic mb-6"
                    >
                        Wedding Collection
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 font-light max-w-2xl mx-auto text-lg"
                    >
                        Discover timeless bridal jewellery crafted for your special day.
                    </motion.p>
                </div>

                {/* Data Section */}
                <div className="space-y-40">
                    {data.map((item, index) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className={`flex flex - col ${ index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap - 16 lg: gap - 24 items - center`}
                        >

                            {/* Image */}
                            <div className="lg:w-1/2 relative group">
                                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                                    <motion.img
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8 }}
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        referrerPolicy="no-referrer"
                                    />
                                </div>

                                <div className="absolute -bottom-8 -right-8 bg-white p-8 shadow-xl max-w-xs hidden md:block">
                                    <h3 className="serif italic text-2xl mb-2">
                                        {item.category}
                                    </h3>
                                    <div className="w-12 h-[1px] bg-gold mb-4" />
                                    <p className="text-xs text-gray-500 font-light">
                                        {item.description}
                                    </p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-1/2">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-gold font-bold mb-2 block">
                                    Featured Piece
                                </span>

                                <h3 className="text-3xl md:text-4xl serif italic mb-6">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600 font-light leading-relaxed mb-6">
                                    {item.description}
                                </p>

                                <p className="text-xl font-semibold text-gold mb-6">
                                    ৳ {item.price}
                                </p>

                                <button className="px-8 py-3 bg-yellow-600 text-white text-xs uppercase tracking-widest font-bold hover:bg-black hover:text-ink border border-gold transition-all duration-500">
                                    View Details
                                </button>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default WeddingCollection;