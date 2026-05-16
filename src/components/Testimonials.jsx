import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";

const INTERVAL_MS = 5000;

function Stars() {
  return (
    <div className="flex justify-center gap-0.5 mb-5 text-brand-gold" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className="text-lg">
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
    <section id="testimonials" className="ds-section bg-white text-center">
      <div className="container mx-auto px-6">
        <p className="ds-eyebrow mb-3">{t("nav.testimonials")}</p>
        <h3 className="ds-title text-3xl md:text-4xl mb-4">{t("testimonials.title")}</h3>
        <div className="ds-divider ds-divider--center mb-12" />

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
                  ? "opacity-100 translate-x-0 relative z-[1]"
                  : "opacity-0 ltr:translate-x-4 rtl:-translate-x-4 absolute inset-0 z-0 pointer-events-none"
              }`}
              aria-hidden={i !== activeIndex}
            >
              <div className="ds-card ds-card--accent p-8">
                <Stars />
                <p className="ds-text italic mb-5 whitespace-pre-line text-brand-purple-muted">
                  "{item.quote}"
                </p>
                <h4 className="font-display text-xl font-semibold u-color-dark-purple">
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
                className={`ds-dot ${i === activeIndex ? "ds-dot--active" : "ds-dot--inactive"}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
