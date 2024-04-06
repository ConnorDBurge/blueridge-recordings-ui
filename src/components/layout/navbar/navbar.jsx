import { HeaderLogo, SearchIcon } from "@components/icons";
import AnnouncementBar from "./anncouncement-bar";
import { MainMenu } from "./menu";
import { Search } from "./search";
import { ShoppingCartButton } from "./shopping-cart";
import { getMenu } from "@lib/shopify";

export default async function Navbar() {
  const primaryMenu = await getMenu("primary-menu");
  const secondaryMenu = await getMenu("secondary-menu");
  return (
    <>
      <AnnouncementBar />
      <header className="h-[58px] md:h-[83px] sticky top-0 md:pb-0 flex flex-col">
        <div className="bg-colors-primary z-10">
          <div className="flex container mt-2 md:mt-4">
            <HeaderLogo />
            <Search />
            <div className="lg:w-[200px] md:w-[100px] h-[43px] mr-[6px] md:mt-1 flex justify-end items-center gap-4">
              <SearchIcon className="md:hidden h-8 w-8 hover:fill-colors-secondary hover:cursor-pointer" />
              <ShoppingCartButton />
            </div>
          </div>
        </div>
        <MainMenu
          className="z-0 relative"
          primaryMenu={primaryMenu}
          secondaryMenu={secondaryMenu}
        />
      </header>
    </>
  );
}
