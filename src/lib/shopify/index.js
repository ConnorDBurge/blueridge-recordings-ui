import { SHOP_QUERY, MENU_QUERY } from "@/lib/shopify/queries";
import { _fetch, getPath } from "@/lib/utils";

const storefrontDomain = process.env.SHOPIFY_STOREFRONT_ENDPOINT;
const storefrontToken = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;
const adminDomain = process.env.SHOPIFY_ADMIN_ENDPOINT;
const adminToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

async function storefront(args) {
  return await _fetch({
    domain: storefrontDomain,
    accessToken: storefrontToken,
    accessTokenHeader: "X-Shopify-Storefront-Access-Token",
    ...args,
  });
}

async function admin(args) {
  return _fetch({
    domain: adminDomain,
    accessToken: adminToken,
    accessTokenHeader: "X-Shopify-Access-Token",
    ...args,
  });
}

// const shop = await getShop();
// export { shop };

export async function getShop() {
  const res = await storefront({ query: SHOP_QUERY });
  return res.body?.data?.shop || {};
}

export async function getMenu(handle) {
  const res = await storefront({
    query: MENU_QUERY,
    variables: {
      handle,
    },
  });

  const menu = res.body?.data?.menu;

  function addPaths(items) {
    items?.forEach((item) => {
      item.path = getPath(item?.url);
      if (item?.items && item?.items?.length > 0) {
        addPaths(item?.items);
      }
    });
  }

  addPaths(menu?.items);
  return menu;
}
