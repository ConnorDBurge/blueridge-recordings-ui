import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

import Navbar from "@/components/layout/index";
import { getStorefront } from "@/lib/shopify";
import { baseUrl } from "@/lib/utils";
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

export default async function LocaleLayout({ children }) {
  const shop = await getStorefront();
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={shop?.brand?.squareLogo?.image?.url} />
      </head>
      <body>
        <Suspense>
          <Navbar />
        </Suspense>
        <Suspense>{children}</Suspense>
        <SpeedInsights />
      </body>
    </html>
  );
}
