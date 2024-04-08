import Link from "next/link";

import { ChevronDownIcon } from "@/components/icons";
import styles from "./menu-item.module.css";

export default function MegaMenu({ menu }) {
  const sortedSubItems = menu.items.sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return (
    <div className="transition-300 max-h-[75vh] -translate-y-[200%] cursor-default overflow-y-auto border-t-[1px] border-tertiary bg-primary group-hover/menu-li:translate-y-0">
      <div className="container py-8">
        <div className="grid grid-cols-3 gap-x-10 gap-y-8 xl:gap-x-24">
          {sortedSubItems.map((subItem) => (
            <div
              key={subItem?.path}
              className={`${styles.mega_menu_parent} group/sub-menu transition-700 opacity-0 group-hover/menu-li:opacity-100`}
            >
              <div
                className={`${styles.mega_menu_underline} transition-300 flex flex-col`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-white group-hover/sub-menu:text-secondary">
                    {subItem?.title}
                  </div>
                  <Link
                    href={subItem?.path}
                    className="group/see-all flex items-center gap-1 no-underline"
                  >
                    <span className="transition-300 text-sm text-gray-200 no-underline opacity-75 group-hover/see-all:text-secondary group-hover/see-all:opacity-100">
                      See All
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col">
                {subItem?.items.map((accordionItem) => (
                  <Link
                    key={accordionItem?.path}
                    href={accordionItem?.path}
                    className="transition-300 py-1 text-sm text-gray-200 no-underline opacity-75 hover:translate-x-1 hover:text-secondary hover:opacity-100"
                  >
                    {accordionItem?.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
