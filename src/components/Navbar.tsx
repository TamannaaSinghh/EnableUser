"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      
      {/* Top Bar */}
      <div className="w-full bg-gray-100 text-sm text-gray-600">
        <div className="max-w-300 mx-auto px-6 flex justify-end gap-6 py-2">
         
          <span className="cursor-pointer hover:text-black">Help Center ↗</span>
          <span className="cursor-pointer hover:text-black flex items-center gap-1">
            Company <ChevronDown size={14} />
          </span>
          <span className="cursor-pointer hover:text-black flex items-center gap-1">
            Partnerships <ChevronDown size={14} />
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-300 mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/enableuser_logo.png"
            alt="EnableUser Logo"
            width={220}
            height={56}
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/platform" className="hover:text-black">
            Platform
          </Link>
          <Link href="/services" className="hover:text-black">
            Services
          </Link>
          <Link href="/methodology" className="hover:text-black">
            Methodology
          </Link>
          <Link href="/academy" className="hover:text-black">
            Academy
          </Link>
          <Link href="/pricing" className="hover:text-black">
            Pricing
          </Link>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="border border-purple-500 text-purple-600 px-5 py-2 rounded-md font-medium hover:bg-purple-50 transition">
            Start Free Trial
          </button>
          <Link href="/contact" className="bg-purple-600 text-white px-5 py-2 rounded-md font-medium hover:bg-purple-700 transition">
            Schedule Demo
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Navbar;