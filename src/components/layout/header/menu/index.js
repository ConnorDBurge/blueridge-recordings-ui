import MenuItem from "./menu-item";
import HideOnScroll from "./hide-scroll";
import { getMenu } from "@/lib/shopify";

export default async function MainMenu() {
  const primaryMenu = await getMenu("primary-menu");
  const secondaryMenu = await getMenu("secondary-menu");
  return (
    <HideOnScroll>
      <div className="bg-primary">
        <nav className="group container hidden justify-between bg-transparent md:flex">
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
        </nav>
      </div>
    </HideOnScroll>
  );
}
