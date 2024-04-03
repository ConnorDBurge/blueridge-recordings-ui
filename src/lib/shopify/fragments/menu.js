import { gql } from "@/lib/utils";

const menuFragment = gql`
  fragment MenuItem on MenuItem {
    id
    resourceId
    tags
    title
    type
    url
  }

  fragment GrandChildMenuItem on MenuItem {
    ...MenuItem
  }

  fragment ChildMenuItem on MenuItem {
    ...MenuItem
    items {
      ...GrandChildMenuItem
    }
  }

  fragment ParentMenuItem on MenuItem {
    ...MenuItem
    items {
      ...ChildMenuItem
    }
  }

  fragment menu on Menu {
    id
    handle
    items {
      ...ParentMenuItem
    }
  }
`;

export default menuFragment;
