import { getMenu } from "@/lib/shopify";
import MenuItem from "./menu-item";

export default async function MainMenu() {
  const primaryMenu = await getMenu("primary-menu");
  const secondaryMenu = await getMenu("secondary-menu");
  return (
    <div
      id="main-menu"
      className="md:flex hidden justify-between items-center relative"
    >
      <ul className="flex gap-3">
        {primaryMenu?.items.map((item) => (
          <MenuItem key={item?.id} item={item} />
        ))}
      </ul>
      <ul className="flex gap-5">
        {secondaryMenu?.items.map((item) => (
          <MenuItem key={item?.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
