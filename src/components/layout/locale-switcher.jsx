"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

import { locales as availableLocales } from "@/i18n";

export default function LocaleSwitcher({ locales }) {
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
        {locales.map(
          ({ locale, name }) =>
            availableLocales.includes(locale) && (
              <option key={locale} value={locale}>
                {name}
              </option>
            )
        )}
      </select>
    </label>
  );
}
