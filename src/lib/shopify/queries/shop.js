import { gql } from "@/lib/utils";

const SHOP_QUERY = gql`
  query getShop {
    shop {
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

export default SHOP_QUERY;
