import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">BrightSmile Dental</h1>
        <ul className="hidden md:flex space-x-8">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#services" className="hover:text-blue-600">Services</a></li>
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
