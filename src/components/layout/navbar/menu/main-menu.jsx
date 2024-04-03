import { getMenu } from "@/lib/shopify";
import MenuItem from "./menu-item";

export default async function MainMenu() {
  const primaryMenu = await getMenu("primary-menu");
  const secondaryMenu = await getMenu("secondary-menu");
  return (
    <div
      id="main-menu"
      className="md:flex hidden overflow-hidden justify-between items-center"
    >
      <ul className="flex">
        {primaryMenu?.items.map((item) => (
          <MenuItem key={item?.id} item={item} />
        ))}
      </ul>
      <ul className="flex">
        {secondaryMenu?.items.map((item) => (
          <MenuItem key={item?.id} item={item} />
        ))}
      </ul>
    </div>
  );
}
