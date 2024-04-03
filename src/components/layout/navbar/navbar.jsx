import { getStorefront } from "@/lib/shopify";
import AnnouncementBar from "./anncouncement-bar";
import Header from "./header";
import { getMenu } from "../../../lib/shopify";

export default async function Navbar() {
  const shop = await getStorefront();
  const primaryMenu = await getMenu("primary-menu");
  const secondaryMenu = await getMenu("secondary-menu");
  return (
    <>
      <AnnouncementBar />
      <Header {...{ shop, primaryMenu, secondaryMenu }} />
    </>
  );
}
