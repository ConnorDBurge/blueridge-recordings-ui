import { getMenu } from "@lib/shopify";

export default async function Footer() {
  const primaryMenu = await getMenu("primary-menu");
  const footerMenu = await getMenu("footer");

  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}
