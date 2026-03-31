'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

interface WeddingItem {
    _id: string;
    title: string;
    price: number;
    img: string;
    description: string;
    category: string;
}

const GlowByMoment = () => {
    const [data, setData] = useState<WeddingItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:5000/wedding')
            .then(res => {
                setData(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center pt-40">Loading...</div>;
    }

    return (
        <div className="pt-32 pb-20 bg-paper">
            <div className="w-11/12 mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-10">
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

                {/* Hero Section */}
                <div className="relative w-full h-[90vh] overflow-hidden">

                    {/* Background Image */}
                    <img
                        src="https://i.imgur.com/AxLrwiY.jpeg"
                        alt="Wedding Hero"
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Content */}
                    <div className="relative z-10 w-11/12 mx-auto px-6 h-full flex items-center">

                        {/* LEFT SIDE - 4 IMAGE GRID */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.2 }
                                }
                            }}
                            className="grid grid-cols-2 gap-3 w-[260px] md:w-[320px]"
                        >
                            {[
                                "https://i.imgur.com/P4CDYJt.jpeg",
                                "https://i.imgur.com/zHuom81.jpeg",
                                "https://i.imgur.com/5G0y4Uq.jpeg",
                                "https://i.imgur.com/ts40uAb.jpeg"
                            ].map((img, index) => (
                                <motion.div
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, scale: 0.8 },
                                        visible: { opacity: 1, scale: 1 }
                                    }}
                                    transition={{ duration: 0.6 }}
                                    className="aspect-square overflow-hidden"
                                >
                                    <motion.img
                                        src={img}
                                        alt="wedding grid"
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        referrerPolicy="no-referrer"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* RIGHT SIDE TEXT */}
                        <div className="ml-10 md:ml-20 text-white max-w-xl">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-4xl md:text-6xl serif italic mb-6"
                            >
                                Wedding Collection
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-gray-200 font-light text-lg mb-8"
                            >
                                A celebration of elegance, crafted for your most unforgettable moments.
                            </motion.p>
                        </div>

                    </div>
                </div>
                {/* Data Section */}
                <div className="space-y-40">
                    {data.map((item, index) => (
                        <motion.div
                            key={item._id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 lg:gap-24 items-center`}
                        >

                            {/* Image */}
                            <div className="lg:w-1/2 mt-8 relative group">
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

export default GlowByMoment;