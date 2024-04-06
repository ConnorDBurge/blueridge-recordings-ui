import { HeaderLogo, SearchIcon } from "@components/icons";
import AnnouncementBar from "./anncouncement-bar";
import { MainMenu } from "./menu";
import { Search } from "./search";
import { ShoppingCartButton } from "./shopping-cart";
import { getMenu } from "@lib/shopify";

export default async function Header() {
  const primaryMenu = await getMenu("primary-menu");
  const secondaryMenu = await getMenu("secondary-menu");
  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 md:pb-0 flex flex-col z-20">
        <div className="bg-colors-primary z-10">
          <div className="flex items-center justify-between gap-16 container md:py-3 py-2">
            <HeaderLogo />
            <Search />
            <div className="flex justify-end items-center gap-4">
              <SearchIcon className="md:hidden h-8 w-8 hover:fill-colors-secondary hover:cursor-pointer" />
              <ShoppingCartButton />
            </div>
          </div>
        </div>
        <MainMenu primaryMenu={primaryMenu} secondaryMenu={secondaryMenu} />
      </header>
    </>
  );
}
