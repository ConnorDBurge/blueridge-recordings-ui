"use-client";

import { useLocale } from "next-intl";
import { redirect } from "next/navigation";

export default function RootNotFound() {
  const activeLocale = useLocale();
  redirect(`/${activeLocale}`);
}
