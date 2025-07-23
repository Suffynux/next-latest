import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import ServicesSection from "../OurServices/Services";
import Industry from "../Industries/Industry";
import Slider from "../Slider/Slider";
import AboutUsLanding from "../AboutUS/LandingAbout";
import Footer from "../Footer/Footer";

const MouseLayout = () => {
  return (
    <>
    <AnimatedCursor
  innerSize={8}
  outerSize={35}
  color="0, 58, 117"  // Dark blue
  outerAlpha={0.3}
  innerScale={0.7}
  outerScale={2}
  clickables={[
    'a',
    'button',
    'input',
    'textarea',
    '[role="button"]',
  ]}
/>

      <div>
        <Navbar />
        <Hero />
        <Industry />
        <ServicesSection />
        <Slider />
        <AboutUsLanding />
        <Footer />
      </div>
    </>
  );
};

export default MouseLayout;
