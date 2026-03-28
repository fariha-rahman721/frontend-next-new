'use client';
import React, { useEffect, useState } from "react";

interface Jewellery {
    id: number;
    category: string;
}

interface CategoryProps {
    jewelleries: Jewellery[];
    onFilter: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ jewelleries, onFilter }) => {
    const [categories, setCategories] = useState<string[]>([]);
    const [activeCategory, setActiveCategory] = useState("All");

    useEffect(() => {
        const uniqueCategories = [
            "All",
            ...new Set(jewelleries.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
    }, [jewelleries]);

    const handleClick = (category: string) => {
        setActiveCategory(category);
        onFilter(category);
    };

    return (
        <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => handleClick(cat)}
                    className={`px-4 py-1.5 text-xs uppercase tracking-wider rounded-full border transition-all duration-300
          ${activeCategory === cat
                            ? "bg-yellow-600 text-white"
                            : "bg-white text-gray-600 hover:bg-yellow-600 hover:text-white"
                        }`}
                >
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default Category;