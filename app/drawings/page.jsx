import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function drawingsPage() {
  return (
    <div className = "flex flex-col justify-center items-center h-full">
      <h1 className="text-2xl font-bold py-10">I draw a lot during my free time. Here are a few of my drawings. &#127912;</h1>
      <div className = "grid grid-cols-3 grid-rows-3 gap-10">
        <div className="relative">
          <Image src={"/1.png"} alt="" height={3508 * 0.15} width={2480 * 0.15}></Image>
        </div>
        <div className="relative">
          <Image src={"/2.png"} alt="" height={3508 * 0.15} width={2480 * 0.15}></Image>
        </div>
        <div className="relative">
          <Image src={"/3.png"} alt="" height={3508 * 0.15} width={2480 * 0.15}></Image>
        </div>
        <div className="relative">
          <Image src={"/4.png"} alt="" height={3508 * 0.15} width={2480 * 0.15}></Image>
        </div>
        <div className="relative">
          <Image src={"/5.png"} alt="" height={3508 * 0.15} width={2480 * 0.15}></Image>
        </div>
        <div className="relative">
          <Image src={"/6.png"} alt="" height={3508 * 0.15} width={2480 * 0.15}></Image>
        </div>
        <div className="relative">
          <Image src={"/7.png"} alt="" height={3508 * 0.15} width={2480 * 0.15}></Image>
        </div>
        <div className="relative">
          <Image src={"/8.png"} alt="" height={3508 * 0.15} width={2480 * 0.15}></Image>
        </div>
        <div className="relative">
          <Image src={"/9.png"} alt="" height={3508 * 0.15} width={2480 * 0.15}></Image>
        </div>

        

      </div>

      <p className = "text-2xl font-semibold py-10">Check out my <Link className="text-indigo-500" href="https://www.instagram.com/farhanart33/" rel="noopener noreferrer" target="_blank">Instagram</Link> if you want to see more drawings.</p>

    </div>
  );
}
