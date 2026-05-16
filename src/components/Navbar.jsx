import React from "react";
import { SUPPORTED_LOCALES, useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <nav className="f-nav fixed w-full top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <h1 className="font-display text-xl md:text-2xl font-bold tracking-wider">
          <a href="#home" className="inline-block">
            <span className="u-color-gold">{t("nav.brand1")}</span>
            <span className="u-color-dark-purple">&nbsp;{t("nav.brand2")}</span>
            <span className="text-futur-cyan">&nbsp;{t("nav.brand3")}</span>
          </a>
        </h1>
        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden md:flex flex-wrap gap-8">
            <li>
              <a href="#home" className="f-nav-link">
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a href="#about" className="f-nav-link">
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a href="#services" className="f-nav-link">
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a href="#testimonials" className="f-nav-link">
                {t("nav.testimonials")}
              </a>
            </li>
            <li>
              <a href="#contact" className="f-nav-link">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
          <div
            className="flex rounded-lg border border-futur-border overflow-hidden text-sm bg-futur-panel/50"
            role="group"
            aria-label={t("lang.switch")}
          >
            {SUPPORTED_LOCALES.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`f-lang-btn ${
                  locale === code ? "f-lang-btn--active" : "f-lang-btn--idle"
                }`}
                lang={code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
