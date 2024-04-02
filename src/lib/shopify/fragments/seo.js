import { gql } from "@/lib/utils";

const seoFragment = gql`
  fragment seo on SEO {
    description
    title
  }
`;

export default seoFragment;
