"use client";

import Link from "next/link";
import { Home, Flame, Settings } from "lucide-react";

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-40">
      {/* Wave SVG Background */}
      <div className="relative">
        <svg
          viewBox="0 0 375 80"
          className="w-full h-20"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0,20 
              C40,20 40,20 60,20 
              C80,20 90,0 120,0 
              C150,0 150,40 187.5,40 
              C225,40 225,0 255,0 
              C285,0 295,20 315,20 
              C335,20 375,20 375,20 
              L375,80 L0,80 Z
            "
            fill="#000000"
          />
        </svg>

        {/* Navigation Icons */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-around px-6 pb-2">
          {/* Home - Left */}
          <Link
            href="/"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
          >
            <Home size={22} strokeWidth={1.5} />
          </Link>

          {/* Center Floating Flame Button */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <button className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200">
              <Flame size={24} />
            </button>
          </div>

          {/* Settings - Right */}
          <Link
            href="/settings"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white transition-colors"
          >
            <Settings size={22} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
