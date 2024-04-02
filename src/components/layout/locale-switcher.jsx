"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

import locales from "@/config/locales";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const activeLocale = useLocale();

  const onLocaleChange = (event) => {
    const locale = event.target.value;
    startTransition(() => {
      router.replace(`/${locale}`);
    });
  };
  return (
    <label className="border-2 rounded">
      <p className="sr-only">Change Language</p>
      <select
        defaultValue={activeLocale}
        className="bg-transparent py-2 border-0"
        onChange={onLocaleChange}
        disabled={isPending}
      >
        {locales.map(({ code, language }) => (
          <option key={code} value={code}>
            {language}
          </option>
        ))}
      </select>
    </label>
  );
}
