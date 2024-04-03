import { getStorefront } from "@/lib/shopify";
import AnnouncementBar from "./anncouncement-bar";
import Header from "./header";
import { MainMenu } from "./menu";

export default async function Navbar() {
  const shop = await getStorefront();

  return (
    <>
      <AnnouncementBar />
      <Header shop={shop}>
        <MainMenu />
      </Header>
    </>
  );
}
