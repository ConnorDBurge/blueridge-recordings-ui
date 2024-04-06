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
    <div className="group/menu-li">
      <li
        className={`
        ${isActive && styles.menu_active}
        ${styles.menu_underline}
        ${item?.depth < 1 && "mr-[7px]"} 
        m-0 pb-[1px]`}
      >
        <Link
          href={item?.path}
          className={`no-underline flex gap-1 my-0 transition-300 font-medium items-center text-white 
        ${!isActive && "group-hover/menu-li:text-colors-secondary"}`}
        >
          {item?.title}
          {item?.depth > 0 && (
            <ChevronDownIcon
              className={`transition-300 group-hover/menu-li:rotate-180
            ${!isActive && "group-hover/menu-li:fill-colors-secondary"}`}
            />
          )}
        </Link>
      </li>
      {item?.depth > 1 && <FlyoutMenu menu={item} />}
    </div>
  );
}
