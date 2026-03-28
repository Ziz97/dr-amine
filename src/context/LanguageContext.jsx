import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import fr from "../locales/fr.json";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

const STORAGE_KEY = "dr-amine-lang";

const MESSAGES = { fr, en, ar };

export const SUPPORTED_LOCALES = ["fr", "en", "ar"];

const RTL_LOCALES = new Set(["ar"]);
export const DEFAULT_LOCALE = "fr";

function getByPath(obj, path) {
  return path.split(".").reduce((acc, key) => (acc != null ? acc[key] : undefined), obj);
}

function readStoredLocale() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw && SUPPORTED_LOCALES.includes(raw)) return raw;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_LOCALE;
    return readStoredLocale();
  });

  const setLocale = useCallback((next) => {
    if (!SUPPORTED_LOCALES.includes(next)) return;
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const messages = MESSAGES[locale] || MESSAGES[DEFAULT_LOCALE];

  const t = useCallback(
    (path) => {
      const value = getByPath(messages, path);
      return value !== undefined ? value : path;
    },
    [messages]
  );

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = RTL_LOCALES.has(locale) ? "rtl" : "ltr";
    const title = getByPath(messages, "meta.title");
    const desc = getByPath(messages, "meta.description");
    if (typeof title === "string") document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    if (typeof desc === "string") meta.setAttribute("content", desc);
  }, [locale, messages]);

  const value = useMemo(
    () => ({ locale, setLocale, t, messages }),
    [locale, setLocale, t, messages]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
