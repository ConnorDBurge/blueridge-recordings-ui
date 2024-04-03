import "server-only";

import {
  MENU_QUERY,
  STOREFRONT_SHOP_QUERY,
  ADMIN_SHOP_QUERY,
  LOCALE_QUERY,
  MARKETS_QUERY,
} from "@/lib/shopify/queries";
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

export async function getStorefront() {
  const res = await storefront({ query: STOREFRONT_SHOP_QUERY });
  return res.body?.data?.storefront || {};
}

export async function getAdmin() {
  const res = await admin({ query: ADMIN_SHOP_QUERY });
  const hours = res.body?.data?.hours?.hours || [];
  const _admin = res.body?.data?.admin || {};
  return { ..._admin, hours };
}

export async function getLocales() {
  const res = await admin({ query: LOCALE_QUERY });
  return res.body?.data?.locales || [];
}

export async function getMarkets() {
  const res = await admin({ query: MARKETS_QUERY });
  return res.body?.data?.markets?.nodes || [];
}

export async function getMenu(handle) {
  const res = await storefront({
    query: MENU_QUERY,
    variables: { handle },
  });

  const menu = res.body?.data?.menu;

  function calcDepth(items, depth = 0) {
    let maxDepth = depth;
    items?.forEach((item) => {
      const childDepth =
        item.items?.length > 0 ? calcDepth(item.items, depth + 1) : depth;
      maxDepth = Math.max(maxDepth, childDepth);
      item.depth = maxDepth - depth;
      item.path = getPath(item.url);
    });
    return maxDepth;
  }

  const totalDepth = calcDepth(menu?.items);
  menu.depth = totalDepth + 1;
  return menu;
}
