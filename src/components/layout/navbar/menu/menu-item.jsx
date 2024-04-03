"use client";

import Link from "next/link";
import { CheveronDownIcon } from "@/components/icons";
import { usePathname } from "next/navigation";

export default function MenuItem({ item }) {
  const pathname = usePathname();
  const isActive = pathname === item?.path;
  return (
    <Link href={item?.path} className="no-underline first:ml-0 last:mr-0">
      <li
        className={
          `group mx-[10px] py-1 border-b-2
              ${isActive ? "border-white" : "border-transparent"} 
              hover:border-colors-secondary
              transition duration-200 ease-in-out
              text-white font-medium 
              hover:text-colors-secondary flex items-center ` +
          `${isActive ? "text-white" : "text-colors-primary"}`
        }
      >
        {item?.title}
        {item?.items && item?.items.length > 0 && (
          <CheveronDownIcon
            className={`w-6 h-6 ml-1 transition-colors duration-300 ease-in-out group-hover:fill-colors-secondary`}
          />
        )}
      </li>
    </Link>
  );
}
