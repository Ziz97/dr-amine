import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-blue-50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
        <img
          src="https://www.cabinetdentairelb.com/wp-content/uploads/salle-de-soins.jpg"
          alt="Dentist"
          className="rounded-lg shadow-lg"
        />
        <div>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">About Our Clinic</h3>
          <p className="text-gray-600 mb-4">
            At BrightSmile Dental, we are committed to providing top-quality dental care in a friendly and comfortable environment. Our experienced team uses state-of-the-art technology to ensure your best smile.
          </p>
          <p className="text-gray-600">
            We treat every patient like family and aim to make every visit as pleasant as possible.
          </p>
        </div>
      </div>
    </section>
  );
}
