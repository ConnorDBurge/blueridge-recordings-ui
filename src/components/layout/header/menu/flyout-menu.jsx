import { ChevronDownIcon } from "@components/icons";
import Link from "next/link";
import Accordion from "@components/common/accordion";

export default function FlyoutMenu({ menu }) {
  const sortedSubItems = menu.items.sort((a, b) =>
    a.title.localeCompare(b.title),
  );

  return (
    <div className="transition-300 flex max-h-[75vh] min-w-40 -translate-y-[200%] cursor-default flex-col gap-3 overflow-y-auto rounded-b-lg border-t-[1px] border-tertiary bg-primary p-6 group-hover/menu-li:translate-y-0">
      {sortedSubItems.map((subItem) => (
        <div
          key={subItem?.path}
          className="group/sub-menu transition-700 opacity-0 group-hover/menu-li:opacity-100"
        >
          {subItem?.depth > 0 ? (
            <Accordion header={subItem?.title}>
              <div className="flex flex-col gap-2 pt-2">
                {subItem?.items.map((accordionItem) => (
                  <Link
                    key={accordionItem?.path}
                    href={accordionItem?.path}
                    className="transition-300 pr-1 text-sm text-gray-200 no-underline opacity-75 hover:translate-x-1 hover:text-secondary hover:opacity-100"
                  >
                    {accordionItem?.title}
                  </Link>
                ))}
              </div>
            </Accordion>
          ) : (
            <Link
              href={subItem?.path}
              className="transition-300 flex justify-between whitespace-nowrap text-white no-underline hover:translate-x-1 group-hover/sub-menu:text-secondary"
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
