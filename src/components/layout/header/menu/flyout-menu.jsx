import { ChevronDownIcon } from "@components/icons";
import Link from "next/link";
import Accordion from "@components/common/accordion";

export default function FlyoutMenu({ menu }) {
  const sortedSubItems = menu.items.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="transform origin-top absolute group-hover/menu-li:scale-y-100 scale-y-0 p-6 mt-[3px] ml-[-10px] min-w-40 max-h-[75vh] flex flex-col gap-3 cursor-default transition-300 bg-colors-primary border-t-[1px] border-colors-tertiary rounded-b-lg">
      {sortedSubItems.map((subItem) => (
        <div key={subItem?.path} className="group/sub-menu">
          {subItem?.depth > 0 ? (
            <Accordion header={subItem?.title}>
              {subItem?.items.map((accordionItem) => (
                <Link
                  key={accordionItem?.path}
                  href={accordionItem?.path}
                  className="pt-2 whitespace-nowrap no-underline flex gap-3 text-gray-200 opacity-75 text-sm pr-1 transition-300 hover:text-colors-secondary hover:translate-x-1 hover:opacity-100"
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
                  className={`w-6 h-6 transition-300 group-hover/sub-menu:rotate-180 group-hover/sub-menu:fill-colors-secondary`}
                />
              )}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
