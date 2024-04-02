import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";

import Navbar from "@/components/layout/index";
import { getStorefront } from "@/lib/shopify";
import { baseUrl } from "@/lib/utils";
import "./globals.css";

export async function generateMetadata(props) {
  const shop = await getStorefront();
  const metadata = {
    metadataBaseUrl: new URL(baseUrl),
    title: shop?.name,
    description: shop?.description,
  };

  return metadata;
}

export default async function LocaleLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
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
