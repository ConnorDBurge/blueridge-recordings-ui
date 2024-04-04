"use client";

import { ChevronDownIcon } from "@/components/icons";
import Link from "next/link";
import Accordion from "@/components/common/accordion";

export default function FlyoutMenu({ menu, full = false, ...rest }) {
  const sortedSubItems = menu.items.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  return (
    <div
      className={`cursor-default transition-all duration-200 ease-in-out transform origin-top absolute bg-colors-primary border-t-[1px] border-colors-tertiary z-20 group-hover:opacity-100 opacity-0 
        ${!full && "rounded-b-lg"}`}
      {...rest}
    >
      <div className={`${full ? "container" : "p-6 flex flex-col gap-3"}`}>
        {sortedSubItems.map((subItem) => (
          <div key={subItem?.path} className="group/sub">
            {subItem?.depth > 0 ? (
              <Accordion header={subItem?.title}>
                {subItem?.items.map((subSubItem) => (
                  <Link
                    key={subSubItem?.path}
                    href={subSubItem?.path}
                    className="pt-2 whitespace-nowrap no-underline flex gap-3 text-gray-200 opacity-75 text-sm pr-1 transition-all duration-300 ease-in-out hover:text-colors-secondary hover:translate-x-1 hover:opacity-100"
                  >
                    {subSubItem?.title}
                  </Link>
                ))}
              </Accordion>
            ) : (
              <Link
                href={subItem?.path}
                className="flex justify-between whitespace-nowrap transition-all duration-200 ease-in-out text-white group-hover/sub:text-colors-secondary hover:translate-x-1 no-underline"
              >
                {subItem?.title}
                {subItem?.depth > 0 && (
                  <ChevronDownIcon
                    className={`w-6 h-6 transition-all duration-300 ease-in-out group-hover/sub:rotate-180 group-hover/sub:fill-colors-secondary`}
                  />
                )}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
