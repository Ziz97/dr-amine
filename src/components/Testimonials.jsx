import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const INTERVAL_MS = 5000;

export default function Testimonials() {
  const { t } = useLanguage();
  const items = Array.isArray(t("testimonials.items")) ? t("testimonials.items") : [];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, INTERVAL_MS);

    return () => clearInterval(timer);
  }, [items.length]);

  if (items.length === 0) return null;

  return (
    <section id="testimonials" className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">{t("testimonials.title")}</h3>

        <div
          className="relative mx-auto max-w-2xl min-h-[280px]"
          aria-live="polite"
          aria-atomic="true"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-in-out ${
                i === activeIndex
                  ? "opacity-100 translate-x-0 relative z-10"
                  : "opacity-0 translate-x-4 absolute inset-0 z-0 pointer-events-none"
              }`}
              aria-hidden={i !== activeIndex}
            >
              <div className="p-6 border rounded-lg shadow-sm bg-blue-50">
                <p className="italic text-gray-700 mb-4 whitespace-pre-line leading-relaxed">
                  "{item.quote}"
                </p>
                <h4 className="font-semibold text-blue-600">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, i) => (
              <button
                key={i}
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
