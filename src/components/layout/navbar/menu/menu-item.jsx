"use client";

import { ChevronDownIcon } from "@components/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import FlyoutMenu from "./flyout-menu";
import styles from "./menu-item.module.css";

export default function MenuItem({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item?.path;
  const megaMenu = item?.title === "All Products";

  const linkRef = useRef(null);
  const [linkRect, setLinkRect] = useState({});

  useEffect(() => {
    const handleResize = () => {
      if (linkRef.current) {
        setLinkRect(linkRef.current.getBoundingClientRect());
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <li
      ref={linkRef}
      className={`
        ${isActive && styles.menu_active}
        ${styles.menu_underline} 
        first:ml-0 last:mr-0 mb-[1px] group/menu-li relative`}
    >
      <Link
        href={item?.path}
        className={`no-underline flex gap-1 my-0 pt-[4px] pb-[2px] transition-300 font-medium items-center text-white 
        ${!isActive && "group-hover/menu-li:text-colors-secondary"}`}
      >
        {item?.title}
        {item?.depth > 0 && (
          <ChevronDownIcon
            className={`w-6 h-6 transition-300 group-hover/menu-li:rotate-180
            ${!isActive && "group-hover/menu-li:fill-colors-secondary"}`}
          />
        )}
      </Link>
      {item?.depth > 1 && (
        <FlyoutMenu
          menu={item}
          style={{
            marginLeft: megaMenu && `-${linkRect.left}px`,
            width: megaMenu && "100vw",
          }}
        />
      )}
    </li>
  );
}
