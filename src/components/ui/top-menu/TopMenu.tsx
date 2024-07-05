"use client";
import { useEffect, useState } from 'react';

import Link from "next/link";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";

export const TopMenu = () => {

  const openSideMenu = useUIStore((state) => state.openSideMenu);
  const totalItemsInCart = useCartStore((state) => state.getTotalItems());
  
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [])
  


  return (
    <nav className="flex px-5 justify-between items-center w-full text-lg">
      {/* Logo */}
      <div>
        <Link href="/">
          <span className={`${titleFont.className } antialiased font-bold text-2xl`}>
            Blabla
          </span>
          <span className='text-2xl font-bold'> Ya</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/contrato"
        >
          Contrato
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/prepago"
        >
          Prepago
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/fibra_tv"
        >
          Fibra TV
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-8 h-8" />
        </Link>

        <Link href={
          ( (totalItemsInCart === 0 ) && loaded )
            ? '/empty'
            : "/cart"
        } className="mx-2">
          <div className="relative">
            {  ( loaded && totalItemsInCart > 0) && (
              <span className="fade-in absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-8 h-8" />
          </div>
        </Link>

        <button
          onClick={openSideMenu}
          className="m-2 p-2 text-xl rounded-md transition-all hover:bg-gray-100"
        >
          Menú
        </button>
      </div>
    </nav>
  );
};
