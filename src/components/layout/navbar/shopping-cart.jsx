import { ShoppingCartIcon } from "@/components/icons";

export function ShoppingCartButton({ itemCount = 0 }) {
  return (
    <a href="/cart" className="group relative inline-block hover:no-underline">
      <ShoppingCartIcon className="h-[31px] w-[31px] group-hover:fill-colors-secondary" />
      {itemCount > 0 && (
        <span className="bg-colors-secondary text-colors-primary border-[2px] border-colors-primary px-[6px] pt-[1px] text-[12px] font-semibold rounded-full absolute -top-[9px] -right-[10px]">
          {itemCount}
        </span>
      )}
    </a>
  );
}
