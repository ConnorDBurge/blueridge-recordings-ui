import Link from "next/link";

import styles from "./menu-item.module.css";

export default function MegaMenu({ menu }) {
  const sortedSubItems = menu.items.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="max-h-[75vh] -translate-y-[200%] group-hover/menu-li:translate-y-0 transition-300 cursor-default bg-primary border-t-[1px] border-tertiary overflow-y-auto">
      <div className="container py-8">
        <div className="grid grid-cols-3 gap-x-24 gap-y-8">
          {sortedSubItems.map((subItem) => (
            <div
              key={subItem?.path}
              className={`${styles.mega_menu_parent} group/sub-menu opacity-0 group-hover/menu-li:opacity-100 transition-700`}
            >
              <Link
                href={subItem?.path}
                className={`${styles.mega_menu_underline} flex flex-col justify-between whitespace-nowrap transition-300 text-white group-hover/sub-menu:text-secondary no-underline`}
              >
                {subItem?.title}
              </Link>
              <div className="flex flex-col gap-2">
                {subItem?.items.map((accordionItem) => (
                  <Link
                    key={accordionItem?.path}
                    href={accordionItem?.path}
                    className="no-underline text-gray-200 opacity-75 text-sm pr-1 transition-300 hover:text-secondary hover:translate-x-1 hover:opacity-100"
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
