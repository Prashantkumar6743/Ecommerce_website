import React from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi";
import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full h-[80px] bg-white border-b border-gray-300 flex items-center relative px-4">
      <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
        <Link href='/' className="text-xl font-bold">Store</Link>
        <RiShoppingBag3Fill className="text-2xl" />
      </div>
      <button className="absolute right-4 flex items-center">
        <HiOutlineShoppingCart className="text-2xl" />
        <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs px-1 rounded-full">
          0
        </span>
      </button>
    </div>
  );
}

export default Navbar;
