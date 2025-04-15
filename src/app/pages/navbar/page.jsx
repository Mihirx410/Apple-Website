"use client";
import React from "react";
import { navLists } from "@constants/index";
import Image from "next/image";
import { appleImg, searchImg, bagImg } from "@/utils"; // Import the images from utils

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        {/* Use the imported images correctly */}
        <Image src={appleImg} alt="Apple Logo" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">
              {nav}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 px-5">
          <Image src={searchImg} alt="Search Icon" width={18} height={18} />
          <Image src={bagImg} alt="Bag Icon" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
