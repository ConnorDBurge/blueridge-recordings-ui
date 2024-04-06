import { ChevronDownIcon } from "@components/icons";
import Link from "next/link";
import Accordion from "@components/common/accordion";

export default function FlyoutMenu({ menu }) {
  const megaMenu = menu?.path === "/collections/all";
  const sortedSubItems = menu.items.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div
      className={`absolute max-h-0 group-hover/menu-li:max-h-[75vh] overflow-hidden transition-300 rounded-b-lg 
        ${megaMenu ? "w-screen left-0" : "ml-[-10px]"}
      `}
    >
      <div className="-translate-y-[26px] group-hover/menu-li:translate-y-0 transition-500 p-6 min-w-40 flex flex-col gap-3 cursor-default bg-colors-primary border-t-[1px] border-colors-tertiary rounded-b-lg">
        {sortedSubItems.map((subItem) => (
          <div
            key={subItem?.path}
            className="group/sub-menu opacity-0 group-hover/menu-li:opacity-100 transition-500"
          >
            {subItem?.depth > 0 ? (
              <Accordion header={subItem?.title}>
                {subItem?.items.map((accordionItem) => (
                  <Link
                    key={accordionItem?.path}
                    href={accordionItem?.path}
                    className="no-underline flex gap-3 text-gray-200 opacity-75 text-sm pr-1 transition-300 hover:text-colors-secondary hover:translate-x-1 hover:opacity-100"
                  >
                    {accordionItem?.title}
                  </Link>
                ))}
              </Accordion>
            ) : (
              <Link
                href={subItem?.path}
                className="flex justify-between whitespace-nowrap transition-300 text-white group-hover/sub-menu:text-colors-secondary hover:translate-x-1 no-underline"
              >
                {subItem?.title}
                {subItem?.depth > 0 && (
                  <ChevronDownIcon
                    className={`transition-300 group-hover/sub-menu:rotate-180 group-hover/sub-menu:fill-colors-secondary`}
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
