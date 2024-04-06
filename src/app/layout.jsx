import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

import { Footer, Navbar } from "@components/layout";
import { getStorefront } from "@lib/shopify";
import { baseUrl } from "@lib/utils";
import "./globals.css";

export async function generateMetadata() {
  const shop = await getStorefront();
  const metadata = {
    metadataBaseUrl: new URL(baseUrl),
    title: shop?.name,
    description: shop?.description,
  };

  return metadata;
}

export default async function RootLayout({ children }) {
  const shop = await getStorefront();
  const favicon = shop?.brand?.squareLogo?.image?.url;
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={favicon} />
      </head>
      <body>
        <Navbar />
        <Suspense>{children}</Suspense>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
