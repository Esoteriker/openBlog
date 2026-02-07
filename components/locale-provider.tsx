"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { defaultLocale, type Locale } from "@/data/profile";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
};

const STORAGE_KEY = "openblog-locale";

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "zh" || saved === "de") {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    const htmlLang = locale === "zh" ? "zh-CN" : locale;
    document.documentElement.lang = htmlLang;
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: (next: Locale) => {
        setLocaleState(next);
        window.localStorage.setItem(STORAGE_KEY, next);
      }
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
