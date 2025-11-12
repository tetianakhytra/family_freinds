"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function PetImageCard({ image, location, product }) {
  const [isFav, setIsFav] = useState(false);

  // Check if current product is already a favorite
  useEffect(() => {
    if (!product) return;
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFav(saved.some((item) => item.id === product.id));
  }, [product]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product) return;

    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    let updated;

    if (isFav) {
      updated = saved.filter((item) => item.id !== product.id);
    } else {
      updated = [...saved, product];
    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    setIsFav(!isFav);
    window.dispatchEvent(new Event("favorites-updated"));
  };

  return (
    <div className="relative w-full aspect-square rounded-3xl overflow-hidden">
      {/* 🖼️ Product image */}
      <Image
        src={image}
        alt={product?.title || "product image"}
        fill
        className="object-cover rounded-3xl pointer-events-none z-0"
        priority
      />

      {/* 🔙 Back arrow */}
      <Link
        href="/"
        className="absolute top-5 left-5 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition z-20"
      >
        <ArrowLeft className="w-5 h-5 text-gray-700" />
      </Link>

      {/* ⭐ Favorite toggle (pink when active) */}
      <button
  onClick={toggleFavorite}
  className={`absolute top-5 right-5 rounded-full p-2 shadow-sm z-20 transition-transform ${
    isFav
      ? "bg-[#fde2df]" 
      : "bg-white/80 hover:bg-white/90" 
  }`}
>
  <Star
    className="w-5 h-5 transition-all"
    fill={isFav ? "#f2968f" : "none"} 
    stroke={isFav ? "#f2968f" : "#555"} 
  />
</button>


      <div className="absolute bottom-5 left-5 bg-[#e4d7d4]/80 backdrop-blur-md px-3 py-1 rounded-2xl flex items-center gap-2 text-sm z-10">
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <Image src={image} alt="thumb" width={24} height={24} />
        </div>
        <span className="text-[14px] font-medium text-gray-800">{location}</span>
      </div>
    </div>
  );
}
