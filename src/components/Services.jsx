import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { getServiceImage } from "../assets/serviceImages";

const INTERVAL_MS = 6000;

export default function Services() {
  const { t, locale } = useLanguage();
  const items = Array.isArray(t("services.items")) ? t("services.items") : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [locale]);

  useEffect(() => {
    if (items.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <section id="services" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">{t("services.title")}</h3>

        <div
          className="relative mx-auto max-w-4xl min-h-[420px]"
          aria-live="polite"
          aria-atomic="true"
        >
          {items.map((item, i) => {
            const src = getServiceImage(item.image);
            return (
              <div
                key={item.image ?? i}
                className={`transition-all duration-700 ease-in-out ${
                  i === activeIndex
                    ? "opacity-100 translate-x-0 relative z-10"
                    : "opacity-0 ltr:translate-x-4 rtl:-translate-x-4 absolute inset-0 z-0 pointer-events-none"
                }`}
                aria-hidden={i !== activeIndex}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center p-6 border rounded-lg shadow-sm bg-white text-start">
                  {src ? (
                    <img
                      src={src}
                      alt=""
                      className="w-full h-56 md:h-72 object-cover rounded-lg shadow-md md:order-1 rtl:md:order-2"
                    />
                  ) : (
                    <div className="w-full h-56 md:h-72 bg-blue-100 rounded-lg md:order-1 rtl:md:order-2" />
                  )}
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line md:order-2 rtl:md:order-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {items.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {items.map((item, i) => (
              <button
                key={item.image ?? i}
                type="button"
                aria-label={`${i + 1} / ${items.length}`}
                aria-current={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-8 bg-blue-600" : "w-2.5 bg-blue-200 hover:bg-blue-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
