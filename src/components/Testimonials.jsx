import React from "react";

const testimonials = [
  { name: "Sarah L.", quote: "Dr. Patel and his team are amazing! My smile has never looked better." },
  { name: "James R.", quote: "I was nervous about dental visits, but they made me feel completely comfortable." },
  { name: "Emily T.", quote: "Professional, clean, and caring — highly recommend BrightSmile Dental!" },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">What Our Patients Say</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 border rounded-lg shadow-sm bg-blue-50">
              <p className="italic text-gray-700 mb-4">“{t.quote}”</p>
              <h4 className="font-semibold text-blue-600">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
