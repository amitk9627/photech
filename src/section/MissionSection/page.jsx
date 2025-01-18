import React from "react";
import MissionBanner from "@/section/MissionSection/MissionBanner";
import WhyChooseUs from "@/section/MissionSection/WhyChooseUs";
import Container from "@/components/Container/Container";
import Banner from "@/assets/heroBanner.jpg";

const page = () => {
  const communityImageStyle = {
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  };
  return (
    <div>
      <MissionBanner />
      <div className="py-16">
        <Container>
          <WhyChooseUs />
        </Container>
      </div>
    
    </div>
  );
};

export default page;
