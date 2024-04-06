"use client";

import { useEffect, useRef, useState } from "react";

export default function HideOnScroll({ children }) {
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
      className={`bg-colors-primary transition-300
      ${isCollapsed && "-translate-y-full"}`}
    >
      {children}
    </div>
  );
}
