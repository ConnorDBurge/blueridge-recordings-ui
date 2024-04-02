import { shop, getMenu } from "@/lib/shopify";

export default async function Navbar() {
  const primaryMenu = await getMenu("primary-menu"); // Move to child component
  const secondaryMenu = await getMenu("secondary-menu"); // Move to child component

  return (
    <div>
      <h1>{shop?.name}</h1>
    </div>
  );
}
