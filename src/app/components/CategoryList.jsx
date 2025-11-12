"use client";

import { useEffect, useState } from "react";

export default function CategoryList({ selected, onSelect }) {
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    async function getCategories() {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json();
        setCategories(data);
      } catch (error) {
        console.error("Failed to load categories:", error);
      }
    }
    getCategories();
  }, []);

  return (
    <div className="flex gap-2 flex-wrap mb-4">
     
      <button
        onClick={() => onSelect("all")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition
          ${
            selected === "all"
              ? "bg-[#f2968f] text-white"
              : "text-gray-700 border border-[#CACACD] hover:bg-[#f2968f] hover:text-white"
          }`}
      >
        All
      </button>

      {/* Dynamic category buttons */}
      {categories.map((cat, index) => {
        // Handle if DummyJSON gives either a string or an object
        const name =
          typeof cat === "string"
            ? cat
            : cat?.slug || cat?.name || `category-${index}`;

        return (
          <button
            key={name}
            onClick={() => onSelect(name)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition
              ${
                selected === name
                  ? "bg-[#f2968f] text-white"
                  : "text-gray-700 border border-[#CACACD] hover:bg-[#f2968f] hover:text-white"
              }`}
          >
            {name}
          </button>
        );
      })}
    </div>
  );
}
