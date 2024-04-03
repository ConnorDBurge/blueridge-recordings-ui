"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { SearchIcon } from "@/components/icons";
import { Search } from "./search";
import { ShoppingCartButton } from "./shopping-cart";

export default function Header({ children, shop }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 0) {
        setIsCollapsed(false);
      } else if (
        currentScrollY > lastScrollY.current &&
        !isCollapsed &&
        currentScrollY - lastScrollY.current > 5
      ) {
        setIsCollapsed(true);
      } else if (
        currentScrollY < lastScrollY.current &&
        isCollapsed &&
        lastScrollY.current - currentScrollY > 5
      ) {
        setIsCollapsed(false);
      }
      lastScrollY.current = currentScrollY;
    };

    const onScroll = () => {
      window.requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isCollapsed]);

  return (
    <header
      className={`bg-colors-primary h-[60px] sticky top-0 z-10 py-2 md:pt-4 md:pb-0 transition-all duration-300 ease-in-out ${
        isCollapsed ? "md:h-[83px]" : "md:h-[119px]"
      }`}
    >
      <div className="container flex flex-col justify-between">
        <div className="flex">
          {/* <HamburgerButton /> */}
          <Link
            href="/"
            className="block ml-14 mb-4 pt-[2px] w-[150px] md:w-[200px] md:p-0 md:ml-[10px]"
          >
            <img src={shop?.brand?.logo?.image?.url} />
          </Link>
          <Search />
          <div className="lg:w-[200px] md:w-[100px] h-[43px] mr-[6px] md:mt-1 flex justify-end items-center gap-4">
            <SearchIcon className="md:hidden h-8 w-8 text-white hover:fill-colors-secondary hover:cursor-pointer" />
            <ShoppingCartButton />
          </div>
        </div>
        <div
          className={`transition-all duration-300 ease-in-out ${
            isCollapsed
              ? "max-h-0 opacity-0 overflow-hidden transition-[max-height 300ms ease-in-out, opacity 300ms ease-in-out]"
              : "max-h-[500px] opacity-1"
          }`}
        >
          {children}
        </div>
        {/* <MobileMenu {...rest} className="md:hidden" /> */}
      </div>
    </header>
  );
}
