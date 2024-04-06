"use client";

import { useEffect, useRef, useState } from "react";
import MenuItem from "./menu-item";

export default function MainMenu({ primaryMenu, secondaryMenu, className }) {
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

    if (window.innerWidth >= 769) {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, [isCollapsed]);

  return (
    <div
      className={`bg-colors-primary transition-300 pt-1
      ${isCollapsed && "-translate-y-full"}
      ${className}
      `}
    >
      <div className="container md:flex hidden justify-between">
        <ul className="flex gap-4">
          {primaryMenu?.items.map((item) => (
            <MenuItem key={item?.id} item={item} />
          ))}
        </ul>
        <ul className="flex gap-5">
          {secondaryMenu?.items.map((item) => (
            <MenuItem key={item?.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
