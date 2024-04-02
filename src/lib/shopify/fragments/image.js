import { gql } from "@/lib/utils";

const imageFragment = gql`
  fragment image on Image {
    url
    altText
    width
    height
  }
`;

export default imageFragment;
