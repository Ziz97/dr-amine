import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-blue-600 text-white text-center">
      <div className="container mx-auto px-6">
        <h3 className="text-3xl font-bold mb-6">Book an Appointment</h3>
        <p className="mb-8 text-blue-100">
          Call us at <strong>(555) 123-4567</strong> or fill out the form below.
        </p>
        <form className="max-w-lg mx-auto space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded text-gray-800" />
          <input type="email" placeholder="Your Email" className="w-full p-3 rounded text-gray-800" />
          <textarea placeholder="Message" className="w-full p-3 rounded text-gray-800 h-32"></textarea>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
