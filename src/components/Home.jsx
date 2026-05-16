import React from "react";
import { useLanguage } from "../context/LanguageContext";
import heroImage from "../assets/images/duo-smile.jpg";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center pt-28 pb-20 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-start">
            <p className="f-eyebrow mb-4">DUO SMILE · Témara</p>
            <h2 className="f-hero-title text-3xl sm:text-4xl lg:text-5xl mb-8 max-w-xl mx-auto lg:mx-0">
              {t("home.title")}
            </h2>
            <div className="f-divider lg:mx-0" />
            <a href="#contact" className="f-btn-primary">
              {t("home.cta")}
            </a>
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 bg-gradient-to-br from-futur-cyan/20 to-futur-purple/20 rounded-2xl blur-3xl scale-90" />
            <img
              src={heroImage}
              alt="DUO SMILE Dental Center"
              className="relative f-img-frame w-full max-w-md object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
