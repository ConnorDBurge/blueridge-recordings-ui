import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import locales from "@/config/locales";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.map(({ code }) => code).includes(locale)) notFound();
  return {
    messages: (await import(`@/config/messages/${locale}.json`)).default,
  };
});
