import React from "react";
import AboutBanner from "@/section/AboutSection/AboutBanner";
import WhyChooseUs from "@/section/AboutSection/WhyChooseUs";
import Container from "@/components/Container/Container";
import WhatWe from "./WhatWe";
const page = () => {
  return (
    <div>
      <AboutBanner />
      <div className="py-16">
        <Container>
          <WhyChooseUs />
        </Container>
      </div>
      <div className="bg-blue-300 py-16">
        <Container>
          <WhatWe />
        </Container>
      </div>
    </div>
  );
};

export default page;
