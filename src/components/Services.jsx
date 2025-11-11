import React from "react";

const services = [
  { title: "Teeth Whitening", desc: "Brighten your smile with safe, effective whitening treatments." },
  { title: "Dental Implants", desc: "Permanent, natural-looking replacements for missing teeth." },
  { title: "Orthodontics", desc: "Straighten your teeth with modern braces or clear aligners." },
  { title: "Emergency Care", desc: "Fast, professional treatment for urgent dental problems." },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">Our Services</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition">
              <h4 className="text-xl font-semibold mb-2 text-blue-600">{s.title}</h4>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
