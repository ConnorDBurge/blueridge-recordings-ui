"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import styles from "./menu-item.module.css";
import { useEffect, useRef, useState } from "react";

export default function MenuItem({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item?.path;
  const megaMenu = item?.path === "/collections/all";

  const linkRef = useRef(null);
  const [linkRect, setLinkRect] = useState({});

  useEffect(() => {
    if (linkRef.current) {
      setLinkRect(linkRef.current.getBoundingClientRect());
    }
  }, []);

  return (
    <Link
      ref={linkRef}
      href={item?.path}
      className={`
        ${isActive && styles.menu_active}
        ${styles.menu_underline} 
        no-underline first:ml-0 last:mr-0 group relative`}
    >
      <li
        className={`flex gap-1 my-0 pt-[4px] pb-[2px] transition duration-200 ease-in-out font-medium items-center text-white 
        ${!isActive && "group-hover:text-colors-secondary"}`}
      >
        {item?.title}
        {item?.depth > 0 && (
          <ChevronDownIcon
            className={`w-6 h-6 transition-all duration-300 ease-in-out group-hover:rotate-180
            ${!isActive && "group-hover:fill-colors-secondary"}`}
          />
        )}
      </li>
      {item?.depth > 1 && (
        <div
          className={`cursor-default transition-transform duration-300 ease-in-out transform origin-top absolute bg-colors-primary border-t-[1px] border-colors-tertiary
        ${megaMenu ? "w-screen" : "w-auto"}
        group-hover:scale-y-100 scale-y-0`}
          style={{
            height: "500px",
            marginTop: "3px",
            marginLeft: megaMenu ? `-${linkRect.left}px` : "-10px",
          }}
        >
          <div
            className={`text-white 
            ${megaMenu && "container"} `}
          >
            {item?.id}
          </div>
        </div>
      )}
    </Link>
  );
}
