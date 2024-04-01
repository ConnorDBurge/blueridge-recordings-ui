import "@/app/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBaseUrl: new URL(baseUrl),
  title: process.env.SITE_NAME,
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
