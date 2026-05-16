import React from "react";
import { SUPPORTED_LOCALES, useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <nav className="ds-nav fixed w-full top-0 left-0 right-0 z-50">
      <div className="ds-hero-band" />
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <h1 className="font-display text-2xl font-semibold tracking-tight">
          <a href="#home" className="inline-block">
            <span className="u-color-gold">{t("nav.brand1")}</span>
            <span className="u-color-dark-purple">&nbsp;{t("nav.brand2")}</span>
            <span className="u-color-gold">&nbsp;{t("nav.brand3")}</span>
          </a>
        </h1>
        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden md:flex flex-wrap gap-8">
            <li>
              <a href="#home" className="ds-nav-link">
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a href="#about" className="ds-nav-link">
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a href="#services" className="ds-nav-link">
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a href="#testimonials" className="ds-nav-link">
                {t("nav.testimonials")}
              </a>
            </li>
            <li>
              <a href="#contact" className="ds-nav-link">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
          <div className="ds-lang-group flex text-sm" role="group" aria-label={t("lang.switch")}>
            {SUPPORTED_LOCALES.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`ds-lang-btn ${
                  locale === code ? "ds-lang-btn--active" : "ds-lang-btn--idle"
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
