import About from "@/components/About";
import Contact from "@/components/Contact";
import GetQuote from "@/components/GetQuote";
import GotProduct from "@/components/GotProduct";
import HerroBanner from "@/components/HerroBanner";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import TwoCols from "@/components/TwoCols";
import React from "react";

const Home = () => {
  return (
    <div>
      <HerroBanner />
      <About />
      <Services />
      <GotProduct />
      <Testimonials />
      <GetQuote />
      <Contact />
      <TwoCols />
    </div>
  );
};

export default Home;
