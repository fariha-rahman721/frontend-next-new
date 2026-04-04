'use client';
import React, { useMemo, useState } from "react";

interface Jewellery {
    id: number;
    category: string;
}

interface CategoryProps {
    jewelleries: Jewellery[];
    onFilter: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ jewelleries, onFilter }) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = useMemo(() => [
        "All",
        ...Array.from(new Set(jewelleries.map(item => item.category)))
    ], [jewelleries]);

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
                    aria-pressed={activeCategory === cat}
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