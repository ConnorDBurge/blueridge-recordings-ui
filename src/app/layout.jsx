import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

import "@/app/globals.css";
import Navbar from "@/components/layout/index";
// import { shop } from "@/lib/shopify";
import { baseUrl } from "@/lib/utils";

export async function generateMetadata() {
  const metadata = {
    metadataBaseUrl: new URL(baseUrl),
    // title: shop?.name,
    // description: shop?.description,
  };

  return metadata;
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
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
