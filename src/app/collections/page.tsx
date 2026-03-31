'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Category from "../Components/Category";
import { ProductModal } from "../Components/ProductModal";
import axios from "axios";

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

const Collections = () => {
    const [jewelleries, setJewelleries] = useState<Jewellery[]>([]);
    const [filtered, setFiltered] = useState<Jewellery[]>([]);
    const [loading, setLoading] = useState(true);

    //  Modal state
    const [selectedProduct, setSelectedProduct] = useState<Jewellery | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get("http://next-backend-3yj8sakwt-farihas-projects-7a667e13.vercel.app/jewelleries")
            .then((res) => {
                setJewelleries(res.data);
                setFiltered(res.data);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching jewelleries:", err));
    }, []);

    const handleFilter = (category: string) => {
        if (category === "All") {
            setFiltered(jewelleries);
        } else {
            setFiltered(jewelleries.filter((item) => item.category === category));
        }
    };

    // Open modal
    const handleViewDetails = (product: Jewellery) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    if (loading) return <p className="text-center py-20">Loading...</p>;

    return (
        <section className="py-20 mt-10 px-4 sm:px-6 lg:px-8 w-11/12 mx-auto">

            {/* HEADER */}
            <div className="text-center mb-10 sm:mb-12">
                <h4 className="italic text-yellow-600 text-sm sm:text-base">Curated Collection</h4>
                <h2 className="text-3xl sm:text-4xl md:text-5xl text-gray-700 serif italic">
                    Exquisite Jewelleries
                </h2>
            </div>

            {/* CATEGORY FILTER */}
            <Category jewelleries={jewelleries} onFilter={handleFilter} />

            {/* GRID */}
            <motion.div
                layout
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-8 lg:gap-5"
            >
                <AnimatePresence>
                    {filtered.map((item) => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => handleViewDetails(item)}
                            className="bg-white shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 relative cursor-pointer"
                        >
                            <div className="w-full overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 object-cover"
                                />
                            </div>

                            <div className="p-4 sm:p-5 md:p-6 flex flex-col items-center text-center justify-center">
                                <h3 className="text-sm sm:text-md md:text-base text-gray-700 font-semibold mb-1">
                                    {item.name}
                                </h3>
                                <p className="text-[10px] sm:text-xs uppercase text-gray-500 tracking-widest mb-1 sm:mb-2">
                                    {item.category}
                                </p>
                                <p className="text-sm sm:text-base md:text-lg font-bold mb-1 sm:mb-2">
                                    {item.price} {item.currency}
                                </p>
                                <p className="text-[10px] sm:text-xs text-yellow-600">
                                    {item.materials.join(", ")}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {/* ✅ Product Modal */}
            <ProductModal
                product={selectedProduct}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </section>
    );
};

export default Collections;