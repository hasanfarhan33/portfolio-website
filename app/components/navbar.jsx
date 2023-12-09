import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="top-0 z-50 bg-indigo-100 font-bold 
    text-xl sticky"
    >
      <div className="flex justify-around py-3">
        <Link href="/" className="group decoration-black transition duration-300">Home
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 h-1 bg-black rounded-full"></span>
        </Link>
        <Link href="/resume" className="group decoration-black transition duration-300">Resume
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 h-1 bg-black rounded-full"></span>
        </Link>
        <Link href="/drawings" className="group decoration-black transition duration-300">Drawings
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-250 h-1 bg-black rounded-full"></span>
        </Link>
      </div>
      
    </nav>
  );
}
