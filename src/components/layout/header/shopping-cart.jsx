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
        <span className="absolute -right-[10px] -top-[9px] rounded-full border-[2px] border-primary bg-secondary px-[6px] pt-px text-[12px] font-semibold text-primary">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
