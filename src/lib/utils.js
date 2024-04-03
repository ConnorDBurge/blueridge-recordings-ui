// import { shop } from "@/lib/shopify";

export const gql = String.raw;

export const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const createUrl = (pathname, params) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;
  return `${pathname}${queryString}`;
};

export const ensureStartsWith = (stringToCheck, startsWith) =>
  stringToCheck.startsWith(startsWith)
    ? stringToCheck
    : `${startsWith}${stringToCheck}`;

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = [
    "SHOPIFY_STOREFRONT_ACCESS_TOKEN",
    "SHOPIFY_ADMIN_ACCESS_TOKEN",
    "SHOPIFY_STOREFRONT_ENDPOINT",
    "SHOPIFY_ADMIN_ENDPOINT",
  ];
  const missingEnvironmentVariables = [];

  requiredEnvironmentVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      missingEnvironmentVariables.push(envVar);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join(
        "\n"
      )}\n`
    );
  }

  if (
    process.env.SHOPIFY_STORE_DOMAIN?.includes("[") ||
    process.env.SHOPIFY_STORE_DOMAIN?.includes("]")
  ) {
    throw new Error(
      "Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them."
    );
  }
};

export function getPath(url) {
  const path =
    url.includes("myshopify.com") ||
    url.includes("localhost") ||
    url.includes(process.env.SITE_DOMAIN) ||
    url.includes(process.env.NEXT_PUBLIC_VERCEL_URL)
      ? `${new URL(url).pathname}${new URL(url).search}${new URL(url).hash}`
      : url;
  return path;
}

export async function _fetch({
  domain,
  accessToken,
  accessTokenHeader,
  cache = "force-cache",
  headers,
  query,
  tags,
  variables,
}) {
  try {
    const result = await fetch(domain, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        [accessTokenHeader]: accessToken,
        ...headers,
      },
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables }),
      }),
      cache,
      ...(tags && { next: { tags } }),
    });

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body,
    };
  } catch (e) {
    throw {
      error: e,
      query,
    };
  }
}
