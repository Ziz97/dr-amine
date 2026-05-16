import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import FuturisticBackground from "./components/FuturisticBackground";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import { handleSmoothScrollClick } from "./utils/smoothScroll";

function App() {
  useEffect(() => {
    document.addEventListener("click", handleSmoothScrollClick);
    return () => document.removeEventListener("click", handleSmoothScrollClick);
  }, []);

  return (
    <div className="relative min-h-screen font-body text-slate-200">
      <FuturisticBackground />
      <Navbar />
      <main>
        <Home />
        <About />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
