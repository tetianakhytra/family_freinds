import Header from "@/app/components/Header";
import PetImageCard from "../components/PetImageCard";
import PetTags from "../components/PetTags";
import PetDescription from "../components/PetDescription";
import AdoptButton from "../components/AdoptButton";
import PetUpdated from "../components/PetUpdated";
import BottomNav from "@/app/components/BottomNav";

export default async function PetDetails({ params }) {
  // get the product id from the URL
  const { id } = await params;

  // get product data from API
  const res = await fetch(`https://dummyjson.com/products/${id}`, { cache: "no-store" });
  const product = await res.json();

  return (
    <main className="p-4 bg-[#fff7f6] min-h-screen">
      <Header />

    
      <PetImageCard image={product.thumbnail} location={product.brand} product={product} />

 
      <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>

   
      <PetTags
        tags={product.tags}
        category={product.category}
        rating={product.rating}
        availability={product.availabilityStatus}
      />

  
      <PetDescription text={product.description} />


      <PetUpdated date="11. november" />

      
      <AdoptButton name={product.title} />
       <BottomNav />
    </main>
  );
}
