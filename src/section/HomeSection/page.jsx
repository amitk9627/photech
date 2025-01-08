import React from "react";
import HomeBanner from "@/section/HomeSection/HeroBanner";
import WhyChooseUs from "@/section/HomeSection/WhyChooseUs";
import Container from "@/components/Container/Container";
import Engagement from "@/section/HomeSection/Engagement";
import TrustedPartner from "@/section/HomeSection/TrustedPartner";
const page = () => {
  return (
    <div className="">
      <HomeBanner />
      <div className="py-16">
        <Container>
          <WhyChooseUs />
        </Container>
      </div>
      <div className="py-16 bg-blue-200">
        <Container>
          <Engagement />
        </Container>
      </div>
      <div className="py-16">
        <Container>
          <TrustedPartner />
        </Container>
      </div>
    </div>
  );
};

export default page;
