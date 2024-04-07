import { ChevronDownIcon } from "@components/icons";
import Link from "next/link";
import Accordion from "@components/common/accordion";

export default function FlyoutMenu({ menu }) {
  const sortedSubItems = menu.items.sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="max-h-[75vh] -translate-y-[200%] group-hover/menu-li:translate-y-0 transition-300 p-6 min-w-40 flex flex-col gap-3 cursor-default bg-primary border-t-[1px] border-tertiary overflow-y-auto rounded-b-lg">
      {sortedSubItems.map((subItem) => (
        <div
          key={subItem?.path}
          className="group/sub-menu opacity-0 group-hover/menu-li:opacity-100 transition-700"
        >
          {subItem?.depth > 0 ? (
            <Accordion header={subItem?.title}>
              <div className="pt-2 flex flex-col gap-2">
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
            </Accordion>
          ) : (
            <Link
              href={subItem?.path}
              className="flex justify-between whitespace-nowrap transition-300 text-white group-hover/sub-menu:text-secondary hover:translate-x-1 no-underline"
            >
              {subItem?.title}
              {subItem?.depth > 0 && (
                <ChevronDownIcon
                  className={`transition-300 group-hover/sub-menu:rotate-180 group-hover/sub-menu:fill-secondary`}
                />
              )}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
