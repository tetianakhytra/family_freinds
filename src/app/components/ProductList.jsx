"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductList({ category }) {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const url =
          category && category !== "all"
            ? `https://dummyjson.com/products/category/${category}?limit=${limit}`
            : `https://dummyjson.com/products?limit=${limit}`;

        const res = await fetch(url);
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [category, limit]);

  return (
    <div>
    
      <div className="grid grid-cols-2 gap-4">
        {products.map((product) => (
          <Link
            href={`/detalje/${product.id}`}
            key={product.id}
            className="bg-white rounded-3xl shadow p-3 hover:scale-[1.02] transition"
          >
            <div className="relative w-full h-36 rounded-2xl overflow-hidden">
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-contain bg-white rounded-t-3xl"
              />
            </div>
            <h2 className="font-semibold mt-2 text-sm">{product.title}</h2>
            <p className="text-xs text-gray-600">{product.brand}</p>
            <p className="text-xs text-gray-400">{product.category}</p>
          </Link>
        ))}
      </div>

    
      <div className="flex justify-center mt-6 mb-20">
        <button
          onClick={() => setLimit((prev) => prev + 8)}
          disabled={loading}
          className="bg-[#f2968f] text-white px-6 py-2 rounded-full hover:bg-[#e0847e] transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : "Load more"}
        </button>
      </div>
    </div>
  );
}
