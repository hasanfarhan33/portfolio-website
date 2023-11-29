import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="flex justify-around  bg-indigo-100 font-bold 
    text-xl"
    >
      <Link href="/">Home</Link>
      <Link href="/resume">Resume</Link>
      <Link href="/drawings">Drawings</Link>
    </nav>
  );
}
