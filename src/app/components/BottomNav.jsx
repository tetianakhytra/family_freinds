import Link from "next/link";
import { Home, Star } from "lucide-react"; // icons from lucide-react

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-3 flex justify-around items-center text-sm">
      <Link
        href="/"
        className="flex flex-col items-center text-gray-600 hover:text-[#f2968f]"
      >
        <Home className="w-6 h-6" />
        <span>Hjem</span>
      </Link>

      <Link
        href="/favoritter"
        className="flex flex-col items-center text-gray-600 hover:text-[#f2968f]"
      >
        <Star className="w-6 h-6" />
        <span>Favoritter</span>
      </Link>
    </nav>
  );
}
