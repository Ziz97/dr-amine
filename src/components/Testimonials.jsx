import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();
  const items = t("testimonials.items");

  return (
    <section id="testimonials" className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">{t("testimonials.title")}</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {Array.isArray(items) &&
            items.map((item, i) => (
              <div key={i} className="p-6 border rounded-lg shadow-sm bg-blue-50">
                <p className="italic text-gray-700 mb-4">“{item.quote}”</p>
                <h4 className="font-semibold text-blue-600">{item.name}</h4>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
