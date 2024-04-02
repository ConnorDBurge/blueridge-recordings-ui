import { gql } from "@/lib/utils";

export const STOREFRONT_SHOP_QUERY = gql`
  query getStorefront {
    storefront: shop {
      id
      name
      description
      primaryDomain {
        url
      }
      brand {
        slogan
        logo {
          image {
            url
          }
        }
        squareLogo {
          image {
            url
          }
        }
      }
    }
  }
`;

export const ADMIN_SHOP_QUERY = gql`
  query getAdmin {
    admin: shop {
      contactEmail
      timezone: timezoneAbbreviation
      billingAddress {
        formatted
        phone
      }
    }

    hours: metaobjectByHandle(
      handle: { type: "store_hours", handle: "store-hours" }
    ) {
      hours: fields {
        key
        value
      }
    }
  }
`;

export const LOCALE_QUERY = gql`
  query getLocales {
    locales: shopLocales {
      locale
      name
    }
  }
`;

export const MARKETS_QUERY = gql`
  query getMarkets {
    markets(first: 4) {
      nodes {
        id
        name
        regions(first: 2) {
          pageInfo {
            hasNextPage
          }
          nodes {
            name
            ... on MarketRegionCountry {
              code
            }
          }
        }
      }
    }
  }
`;
