"use client";

import Link from "next/link";
import { ChevronDownIcon } from "@/components/icons";
import { usePathname } from "next/navigation";
import styles from "./menu-item.module.css";

export default function MenuItem({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item?.path;
  return (
    <Link
      href={item?.path}
      className={`
      ${isActive && styles.menu_active}
      ${styles.menu_underline} 
      no-underline first:ml-0 last:mr-0`}
    >
      <li
        className={`group my-0 py-1 transition duration-200 ease-in-out font-medium flex items-center text-white 
        ${!isActive && "hover:text-colors-secondary"}`}
      >
        {item?.title}
        {item?.items && item?.items.length > 0 && (
          <ChevronDownIcon
            className={`w-6 h-6 ml-1 transition-all duration-300 ease-in-out group-hover:rotate-180
            ${!isActive && "group-hover:fill-colors-secondary"}`}
          />
        )}
      </li>
    </Link>
  );
}
