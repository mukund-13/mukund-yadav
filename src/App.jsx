// import React from "react";
// import Header from "./components/header/header";
// import Nav from "./components/nav/nav";
// import About from "./components/about/about";
// import Experience from "./components/experience/experience";
// import Services from "./components/services/services";
// import Portfolio from "./components/portfolio/portfolio";
// import Testimonials from "./components/testimonials/testimonials";
// import Contact from "./components/contact/contact";
// import Footer from "./components/footer/footer";
// // import { useEffect } from "react";

// const App = () => {
//   // useEffect(() => {
//   //   document.querySelector('a[title*=webhost]').remove()
//   //   const disclaimerDiv = document.querySelector("div.disclaimer");
//   //   if (disclaimerDiv) {
//   //     disclaimerDiv.remove();
//   //   }
//   // }, []);
//   return (
//     <>
//       <Header />
//       <Nav />
//       <About />
//       <Experience />
//       <Services />
//       <Portfolio />
//       <Testimonials />
//       <Contact />
//       <Footer />
//     </>
//   );
// };

// export default App;
import React, { useRef } from "react";
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import About from "./components/about/about";
import Experience from "./components/experience/experience";
import Services from "./components/services/services";
import Portfolio from "./components/portfolio/portfolio";
import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [homeRef, aboutRef, experienceRef, servicesRef, portfolioRef, testimonialsRef, contactRef];

  return (
    <>
      <Header ref={homeRef} />
      <Nav sectionRefs={sectionRefs} />
      <section id="about" ref={aboutRef}><About /></section>
      <section id="experience" ref={experienceRef}><Experience /></section>
      <section id="services" ref={servicesRef}><Services /></section>
      <section id="portfolio" ref={portfolioRef}><Portfolio /></section>
      <section id="testimonials" ref={testimonialsRef}><Testimonials /></section>
      <section id="contact" ref={contactRef}><Contact /></section>
      <Footer />
    </>
  );
};

export default App;
