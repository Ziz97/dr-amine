import React from "react";
import { useLanguage } from "../context/LanguageContext";
import heroImage from "../assets/images/duo-smile.jpg";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section id="home" className="ds-section ds-section--cream pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-start order-2 lg:order-1">
            <p className="ds-eyebrow mb-4">Cabinet dentaire · Témara</p>
            <h2 className="ds-hero-title text-3xl sm:text-4xl lg:text-[2.75rem] mb-6 max-w-xl mx-auto lg:mx-0">
              {t("home.title")}
            </h2>
            <div className="ds-divider mb-8 lg:mx-0" />
            <a href="#contact" className="ds-btn-primary">
              {t("home.cta")}
            </a>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src={heroImage}
              alt="DUO SMILE Dental Center"
              className="ds-img w-full max-w-lg object-cover aspect-[5/4]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
