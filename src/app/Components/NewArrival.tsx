'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Plus, X } from 'lucide-react';
import axios from 'axios';

interface Jewellery {
    id: number;
    name: string;
    category: string;
    price: number;
    discount: number;
    currency: string;
    materials: string[];
    weight: string;
    stone: string;
    stock: number;
    rating: number;
    reviews: number;
    img: string;
    img2: string;
}

const NewArrival = () => {
    const [jewelleries, setJewelleries] = useState<Jewellery[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedProduct, setSelectedProduct] = useState<Jewellery | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios
            .get("https://next-backend-3yj8sakwt-farihas-projects-7a667e13.vercel.app/jewelleries")
            .then((res) => setJewelleries(res.data))
            .catch((err) => console.error("Error fetching jewelleries:", err));
    }, []);

    const openModal = (product: Jewellery) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    if (loading) return <p className="text-center py-20">Loading new arrivals...</p>;

    return (
        <section className="py-20 px-6 w-11/12 mx-auto">
            <div className="text-center mb-16">
                <h4 className="italic text-yellow-600">Our New Arrivals</h4>
                <h2 className="text-4xl md:text-5xl text-gray-700 serif italic">
                    Exclusive Selections
                </h2>
            </div>

            {/* GRID */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center">
                {jewelleries.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-white shadow-lg  overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:z-10 relative ml-6 mb-12"
                        style={{ zIndex: jewelleries.length - index }}
                        onClick={() => openModal(item)}
                    >
                        <div className="w-64 h-72 overflow-hidden relative">
                            <img
                                src={item.img2}
                                alt={item.name}
                                className="w-full h-full object-cover  shadow-sm"
                            />
                            <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500 rounded-xl" />
                            <button
                                onClick={(e) => { e.stopPropagation(); alert(`Added ${item.name} to cart`); }}
                                className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-600 hover:text-white transition-all"
                            >
                                <Plus size={18} />
                            </button>
                        </div>
                        <div className="p-4 text-center">
                            <h4 className="text-md font-semibold text-gray-700">{item.name}</h4>
                            <p className="text-xs uppercase text-gray-500 tracking-widest">{item.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* MODAL */}
            <AnimatePresence>
                {isModalOpen && selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                        onClick={closeModal}
                    >
                        <motion.div
                            drag="y"
                            dragConstraints={{ top: -50, bottom: 50 }}
                            dragElastic={0.2}
                            onDragEnd={(e, info) => { if (info.point.y > 200) closeModal(); }}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-11/12 max-w-xl bg-white rounded-2xl overflow-hidden shadow-2xl cursor-grab"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-500  flex items-center justify-center shadow hover:bg-gold hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col md:flex-row">
                                {/* Image */}
                                <div className="md:w-1/2 w-full h-80 md:h-auto overflow-hidden bg-gray-100">
                                    <img
                                        src={selectedProduct.img2}
                                        alt={selectedProduct.name}
                                        className="w-full h-80 object-cover"
                                    />
                                </div>

                                {/* Info */}
                                <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-widest bg-gray-100/80 backdrop-blur-md px-3 py-1 rounded-full font-medium mb-3 inline-block">
                                            {selectedProduct.category}
                                        </span>
                                        <h3 className="serif text-2xl font-semibold mb-2">{selectedProduct.name}</h3>
                                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2 font-light">
                                            {selectedProduct.materials.join(', ')}
                                        </p>
                                        <p className="text-sm text-gray-800 mb-2">
                                            <span className="font-bold">{selectedProduct.price} {selectedProduct.currency}</span>
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <Star className="text-yellow-500" size={16} />
                                            <span className="text-xs">{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
                                        </div>
                                    </div>

                                    <button
                                        className="mt-4 px-6 py-2 bg-gray-800 text-white font-semibold uppercase rounded hover:bg-yellow-600 transition-colors duration-300"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default NewArrival;