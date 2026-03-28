'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star } from 'lucide-react';

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
}

interface ProductModalProps {
    product: Jewellery | null;
    isOpen: boolean;
    onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        drag="y"
                        dragConstraints={{ top: -50, bottom: 50 }}
                        dragElastic={0.2}
                        onDragEnd={(event, info) => {
                            if (info.point.y > 200) onClose();
                        }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-11/12 max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl cursor-grab flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shadow hover:bg-gold hover:text-white transition-colors z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* Left: Product Image */}
                        <div className="w-full md:w-1/2 aspect-[4/5] overflow-hidden bg-gray-100">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                                referrerPolicy="no-referrer"
                            />
                        </div>

                        {/* Right: Product Details */}
                        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center gap-3">
                            <span className="text-sm text-yellow-500 ">{product.rating} ({product.reviews} reviews)</span>

                            <h3 className="serif text-3xl font-semibold">{product.name}</h3>

                            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mb-2">
                                <p className="font-light">Materials: {product.materials.join(', ')}</p>
                                {product.stone && <p className="font-light">Stone: {product.stone}</p>}
                                <p className="font-light">Weight: {product.weight}</p>
                            </div>

                            <div className="flex items-center gap-2 mb-3">
                                <Star size={16} className="text-yellow-500" />
                                
                            </div>

                            <p className="text-2xl font-bold tracking-wider mb-4">{product.price} {product.currency}</p>

                            <button
                                className="px-6 py-3 bg-gray-800 text-white font-semibold uppercase rounded hover:bg-gold transition-colors duration-300 w-full md:w-auto"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};