import React from "react";
import AboutBanner from "@/section/AboutSection/AboutBanner";
import WhyChooseUs from "@/section/AboutSection/WhyChooseUs";
import Container from "@/components/Container/Container";
import WhatWe from "./WhatWe";
import Banner from "@/assets/heroBanner.jpg";
import Community from "@/section/AboutSection/Community";

const page = () => {
  const communityImageStyle = {
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  };
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
      <div style={communityImageStyle} className="py-16">
        <Container>
          <Community />
        </Container>
      </div>
    </div>
  );
};

export default page;
