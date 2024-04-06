import MenuItem from "./menu-item";
import HideOnScroll from "./hide-scroll";
import { getMenu } from "@/lib/shopify";

export default async function MainMenu() {
  const primaryMenu = await getMenu("primary-menu");
  const secondaryMenu = await getMenu("secondary-menu");
  return (
    <HideOnScroll>
      <div className="container md:flex hidden justify-between pt-[1px] bg-transparent">
        <ul className="flex gap-3">
          {primaryMenu?.items.map((item) => (
            <MenuItem key={item?.id} item={item} />
          ))}
        </ul>
        <ul className="flex gap-3">
          {secondaryMenu?.items.map((item) => (
            <MenuItem key={item?.id} item={item} />
          ))}
        </ul>
      </div>
    </HideOnScroll>
  );
}
