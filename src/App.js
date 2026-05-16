import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
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
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
