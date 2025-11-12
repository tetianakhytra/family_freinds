"use client";

import { useState } from "react";
import Header from "@/app/components/Header";
import CategoryList from "@/app/components/CategoryList";
import ProductList from "@/app/components/ProductList";
import BottomNav from "@/app/components/BottomNav";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="p-4 bg-[#fff7f6] min-h-screen">
      <Header />

      <CategoryList
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <ProductList category={selectedCategory} />

      <BottomNav />
    </main>
  );
}
