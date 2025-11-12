"use client";

import { useEffect, useState } from "react";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/BottomNav";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react"; 

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);

  const loadFavorites = () => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  };

  useEffect(() => {
    loadFavorites();
    const handleStorage = (e) => {
      if (e.key === "favorites") loadFavorites();
    };
    const handleCustom = () => loadFavorites();

    window.addEventListener("storage", handleStorage);
    window.addEventListener("favorites-updated", handleCustom);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("favorites-updated", handleCustom);
    };
  }, []);

  return (
    <main className="p-4 bg-[#fff7f6] min-h-screen">
      <Header />

  
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-sm hover:bg-white transition mb-4"
      >
        <ArrowLeft />
 
      </Link>

      <h1 className="text-2xl font-semibold mb-4 text-center"> Favoritter</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500 text-center mt-10">
          Du har ingen favoritter endnu 
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 mb-24">
          {favorites.map((item) => (
            <Link
              key={item.id}
              href={`/detalje/${item.id}`}
              className="bg-white rounded-3xl shadow p-3 hover:scale-[1.02] transition block"
            >
              <div className="relative w-full h-36 rounded-2xl overflow-hidden">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="font-semibold mt-2 text-sm">{item.title}</h2>
              <p className="text-xs text-gray-600">{item.brand}</p>
              <p className="text-xs text-gray-400">{item.category}</p>
            </Link>
          ))}
        </div>
      )}

      <BottomNav />
    </main>
  );
}
