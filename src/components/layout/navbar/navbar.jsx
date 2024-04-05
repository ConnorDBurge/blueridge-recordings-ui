import { HeaderLogo, SearchIcon } from "@/components/icons";
import AnnouncementBar from "./anncouncement-bar";
import Header from "./header";
import { MainMenu } from "./menu";
import { Search } from "./search";
import { ShoppingCartButton } from "./shopping-cart";

export default function Navbar() {
  return (
    <>
      <AnnouncementBar />
      <Header className="bg-colors-primary h-[58px] sticky top-0 z-10 py-2 md:pt-4 md:pb-0 transition-300">
        <div className="container flex flex-col justify-between">
          <div className="flex">
            <HeaderLogo />
            <Search />
            <div className="lg:w-[200px] md:w-[100px] h-[43px] mr-[6px] md:mt-1 flex justify-end items-center gap-4">
              <SearchIcon className="md:hidden h-8 w-8 text-white hover:fill-colors-secondary hover:cursor-pointer" />
              <ShoppingCartButton />
            </div>
          </div>
          <MainMenu />
        </div>
      </Header>
    </>
  );
}
