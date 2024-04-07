"use client";

import { ChevronDownIcon } from "@components/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FlyoutMenu from "./flyout-menu";
import styles from "./menu-item.module.css";

export default function MenuItem({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item?.path;

  return (
    <li
      className={`
        ${isActive && styles.menu_active}
        ${styles.menu_underline}
        ${item?.depth < 1 && "mr-[7px]"} 
        m-0 py-[1px] group/menu-li`}
    >
      <Link
        href={item?.path}
        className={`no-underline flex gap-1 my-0 transition-300 font-medium items-center text-white 
        ${!isActive && "group-hover/menu-li:text-secondary"}`}
      >
        {item?.title}
        {item?.depth > 0 && (
          <ChevronDownIcon
            className={`transition-300 group-hover/menu-li:rotate-180
            ${!isActive && "group-hover/menu-li:fill-secondary"}`}
          />
        )}
      </Link>
      {item?.depth > 1 && (
        <div className="absolute max-h-0 group-hover/menu-li:max-h-[75vh] overflow-hidden transition-300 rounded-b-lg ml-[-10px] mt-[3px]">
          <FlyoutMenu menu={item} />
        </div>
      )}
    </li>
  );
}