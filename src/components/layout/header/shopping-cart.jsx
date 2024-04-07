import { ShoppingCartIcon } from "@components/icons";
import Link from "next/link";

export function ShoppingCartButton({ itemCount = 0 }) {
  return (
    <Link
      href="/cart"
      className="group relative inline-block hover:no-underline"
    >
      <ShoppingCartIcon className="h-[31px] w-[31px] group-hover:fill-secondary" />
      {itemCount > 0 && (
        <span className="bg-secondary text-primary border-[2px] border-primary px-[6px] pt-[1px] text-[12px] font-semibold rounded-full absolute -top-[9px] -right-[10px]">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
