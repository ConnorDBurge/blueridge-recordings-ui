import { HeaderLogo, SearchIcon } from "@components/icons";
import AnnouncementBar from "./anncouncement-bar";
import MainMenu from "./menu";
import { Search } from "./search";
import { ShoppingCartButton } from "./shopping-cart";

export default async function Header() {
  return (
    <>
      <AnnouncementBar />
      <header className="z-25 sticky top-0 flex flex-col md:pb-0">
        <div className="z-20 bg-primary">
          <div className="container flex items-center gap-8 py-2 md:py-3 lg:gap-16">
            <HeaderLogo />
            <Search />
            <div className="flex items-center justify-end gap-4">
              <SearchIcon className="h-8 w-8 hover:cursor-pointer hover:fill-secondary md:hidden" />
              <ShoppingCartButton />
            </div>
          </div>
        </div>
        <MainMenu />
      </header>
    </>
  );
}
