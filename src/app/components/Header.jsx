"use client";

import Link from "next/link";
import { Bell } from "lucide-react"; 

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-[#fff7f6] ">
      {/* Logo / App name */}
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl font-manrop font-extrabold text-gray-800">FamilyFriends</span>
      </Link>

      {/* Right side icons */}
      <div className="flex items-center gap-3">
        {/* Notification button */}
        <button
          type="button"
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </header>
  );
}
