import Link from "next/link";

import { ChevronDownIcon } from "@/components/icons";
import styles from "./menu-item.module.css";

export default function MegaMenu({ menu }) {
  const sortedSubItems = menu.items.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="max-h-[75vh] -translate-y-[200%] group-hover/menu-li:translate-y-0 transition-300 cursor-default bg-primary border-t-[1px] border-tertiary overflow-y-auto">
      <div className="container py-8">
        <div className="grid grid-cols-3 gap-x-10 xl:gap-x-24 gap-y-8">
          {sortedSubItems.map((subItem) => (
            <div
              key={subItem?.path}
              className={`${styles.mega_menu_parent} group/sub-menu opacity-0 group-hover/menu-li:opacity-100 transition-700`}
            >
              <div
                className={`${styles.mega_menu_underline} flex flex-col transition-300`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-white group-hover/sub-menu:text-secondary">
                    {subItem?.title}
                  </div>
                  <Link
                    href={subItem?.path}
                    className="no-underline flex gap-1 items-center group/see-all"
                  >
                    <span className="text-gray-200 group-hover/see-all:text-secondary group-hover/see-all:opacity-100 text-sm opacity-75 no-underline transition-300">
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
                    className="no-underline text-gray-200 opacity-75 text-sm py-1 transition-300 hover:text-secondary hover:translate-x-1 hover:opacity-100"
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
