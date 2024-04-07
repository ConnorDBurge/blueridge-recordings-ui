"use client";

import { useEffect, useRef, useState } from "react";

export default function HideOnScroll({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      // Enable or disable functionality based on screen width
      if (window.innerWidth >= 769) {
        window.addEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
        setIsCollapsed(false);
      }
    };

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

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [isCollapsed]);

  return (
    <div
      className={`transition-300
      ${isCollapsed && "-translate-y-full"}`}
    >
      {children}
    </div>
  );
}
