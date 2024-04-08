import { SearchIcon } from "@components/icons";
import SearchInput from "./search-input";

export default function Search() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="transition-500 w-full max-w-[750px]">
        <div className="relative hidden md:block">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="ml-2 h-6 w-6 text-white" />
          </div>
          <SearchInput />
        </div>
      </div>
    </div>
  );
}
