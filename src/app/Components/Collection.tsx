'use client';
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Category from "./Category";
import { ProductModal } from "./ProductModal"; 

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

const ITEMS_PER_PAGE = 5;

const Collection = () => {
  const [jewelleries, setJewelleries] = useState<Jewellery[]>([]);
  const [filtered, setFiltered] = useState<Jewellery[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Modal state
  const [selectedProduct, setSelectedProduct] = useState<Jewellery | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/jewelleries`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${ res.status }`);
        }
        return res.json();
      })
      .then((data) => {
        setJewelleries(data);
        setFiltered(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching jewelleries:", err));
  }, []);

  const handleFilter = (category: string) => {
    setCurrentPage(1); // reset page when filtering
    if (category === "All") {
      setFiltered(jewelleries);
    } else {
      setFiltered(jewelleries.filter((item) => item.category === category));
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  //  Open modal
  const handleViewDetails = (product: Jewellery) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  if (loading) return <p className="text-center py-20">Loading...</p>;

  return (
    <section className="py-20 px-6 w-11/12 mx-auto">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h4 className="italic text-yellow-600">Curated Collection</h4>
        <h2 className="text-4xl md:text-5xl text-gray-700 serif italic">
          Exquisite Jewelleries
        </h2>
      </div>

      {/* CATEGORY FILTER */}
      <Category jewelleries={jewelleries} onFilter={handleFilter} />

      {/* GRID */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        <AnimatePresence>
          {currentItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleViewDetails(item)}
              className="bg-white shadow-lg  overflow-hidden hover:scale-105 transition-transform duration-300 relative"
            >
              <div className="w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.category}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-6 flex flex-col items-center text-center justify-center">
                <h3 className="text-md text-gray-700 font-semibold mb-1">{item.name}</h3>
                <p className="text-xs uppercase text-gray-500 tracking-widest mb-2">{item.category}</p>
                <p className="text-base  font-bold mb-2">{item.price} {item.currency}</p>
                <p className="text-xs text-yellow-600 mb-1">{item.materials.join(", ")}</p>

                {/* ✅ Trigger modal */}

              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* PAGINATION */}
      <div className="flex justify-center mt-12 gap-2 flex-wrap">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`px - 4 py - 1.5 text - sm rounded - full border transition - all duration - 300
              ${ currentPage === page
      ? "bg-gray-800 text-white border-gray-800"
      : "bg-white text-gray-600 border-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* ✅ Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Collection;