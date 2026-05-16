import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const INTERVAL_MS = 5000;

function Stars() {
  return (
    <div className="flex justify-center gap-1 mb-5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="text-futur-gold text-lg">
          ★
        </span>
      ))}
    </div>
  );
}

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
    <section id="testimonials" className="f-section text-center">
      <div className="container mx-auto px-6">
        <p className="f-eyebrow mb-3">03</p>
        <h3 className="f-title text-3xl md:text-4xl mb-4">{t("testimonials.title")}</h3>
        <div className="f-divider mb-12" />

        <div
          className="relative mx-auto max-w-2xl min-h-[300px]"
          aria-live="polite"
          aria-atomic="true"
        >
          {items.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ease-in-out ${
                i === activeIndex
                  ? "opacity-100 translate-x-0 relative z-10"
                  : "opacity-0 ltr:translate-x-4 rtl:-translate-x-4 absolute inset-0 z-0 pointer-events-none"
              }`}
              aria-hidden={i !== activeIndex}
            >
              <div className="f-card p-8 text-center">
                <Stars />
                <p className="f-text italic mb-5 whitespace-pre-line leading-relaxed text-slate-300">
                  "{item.quote}"
                </p>
                <h4 className="font-display text-sm tracking-widest uppercase text-futur-cyan">
                  {item.name}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {items.length > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            {items.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`${i + 1} / ${items.length}`}
                aria-current={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className={`f-dot ${i === activeIndex ? "f-dot--active" : "f-dot--inactive"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
