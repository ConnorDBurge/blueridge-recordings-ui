import { HeaderLogo, SearchIcon } from "@components/icons";
import AnnouncementBar from "./anncouncement-bar";
import MainMenu from "./menu";
import { Search } from "./search";
import { ShoppingCartButton } from "./shopping-cart";

export default async function Header() {
  return (
    <>
      <AnnouncementBar />
      <header className="sticky top-0 md:pb-0 flex flex-col z-25">
        <div className="bg-colors-primary z-20">
          <div className="flex items-center justify-between gap-16 container md:py-3 py-2">
            <HeaderLogo />
            <Search />
            <div className="flex justify-end items-center gap-4">
              <SearchIcon className="md:hidden h-8 w-8 hover:fill-colors-secondary hover:cursor-pointer" />
              <ShoppingCartButton />
            </div>
          </div>
        </div>
        <MainMenu />
      </header>
    </>
  );
}
