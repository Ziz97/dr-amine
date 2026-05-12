import React from "react";
import { SUPPORTED_LOCALES, useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const { t, locale, setLocale } = useLanguage();

  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-6 py-4 flex flex-wrap justify-between items-center gap-4">
        <h1 className="text-2xl font-bold text-blue-600">
          <span className="u-color-gold">{t("nav.brand1")}</span>
          <span className="u-color-dark-purple">&nbsp;{t("nav.brand2")}</span>
          <span className="u-color-gold">&nbsp;{t("nav.brand3")}</span>
        </h1>
        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden md:flex flex-wrap gap-8">
            <li>
              <a href="#home" className="hover:text-blue-600">
                {t("nav.home")}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">
                {t("nav.about")}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-blue-600">
                {t("nav.services")}
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-blue-600">
                {t("nav.testimonials")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">
                {t("nav.contact")}
              </a>
            </li>
          </ul>
          <div
            className="flex rounded-lg border border-gray-200 overflow-hidden text-sm"
            role="group"
            aria-label={t("lang.switch")}
          >
            {SUPPORTED_LOCALES.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={`px-3 py-1.5 font-medium transition ${
                  locale === code
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
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
