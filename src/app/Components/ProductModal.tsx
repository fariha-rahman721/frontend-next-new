'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, ShoppingCart } from 'lucide-react';

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
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState("Brown");

    if (!product) return null;

    const totalPrice = product.price * quantity;

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
                        className="relative w-11/12 max-w-5xl h-[90vh] md:h-[600px] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-red-500 hover:text-white transition z-10"
                        >
                            <X size={20} />
                        </button>

                        {/* LEFT IMAGE */}
                        <div className="w-full md:w-1/2 h-[250px] md:h-full bg-gray-100">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="w-full md:w-1/2 p-6 flex flex-col gap-4 overflow-y-auto">
                            {/* Title */}
                            <h2 className="text-2xl font-semibold mt-4">
                                 {product.name}
                            </h2>
                            

                            {/* Rating */}
                            <div className="flex items-center gap-2 text-gray-500 border-b pb-3 border-gray-300">
                                <Star size={16} className="text-yellow-500" />
                                <span>
                                    ({product.reviews} reviews)
                                </span>
                            </div>

                            {/* Seller */}
                            <div className="flex items-center justify-between text-sm border-b pb-3 border-gray-300">
                                
                                <p className="px-3 py-1 bg-orange-200 text-orange-600 rounded">
                                   Exclusive Collection
                                </p>
                                
                            </div>

                            {/* Price */}
                            <div className="text-3xl font-bold text-red-600 border-b pb-3 border-gray-300">
                                ৳{product.price.toFixed(2)}
                                <span className="text-sm text-gray-500 ml-1">/pc</span>
                            </div>

                            {/* COLORS */}
                            <div>
                                <p className="text-sm text-gray-500 mb-2">Colors:</p>
                                <div className="flex gap-2 border-b pb-3 border-gray-300">
                                    {["Brown", "Black", "Black golden"].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-1 border rounded 
                                                ${selectedColor === color
                                                    ? "border-red-500 text-red-500"
                                                    : "border-gray-300 text-gray-600"
                                                }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* QUANTITY */}
                            <div className="flex items-center gap-4 border-b pb-3 border-gray-300">
                                <p className="text-sm text-gray-500">Quantity:</p>
                                <div className="flex items-center border rounded">
                                    <button
                                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                        className="px-3 py-1"
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
                                        className="px-3 py-1"
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="text-sm text-gray-400 border-b pb-3 border-gray-300">
                                    ({product.stock} available)
                                </span>
                            </div>

                            {/* TOTAL */}
                            <div className="text-lg font-semibold">
                                Total Price: <span className="text-red-600">৳{totalPrice.toFixed(2)}</span>
                            </div>

                            {/* BUTTONS */}
                            <div className="flex gap-3 mt-4">
                                <button className="flex items-center gap-2 px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200">
                                    <ShoppingCart size={16} />
                                    Add to cart
                                </button>

                                <button className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700">
                                    Buy Now
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};