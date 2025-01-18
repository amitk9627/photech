import React from "react";
import Banner from "@/assets/heroBanner.jpg";
import Container from "@/components/Container/Container";
const MissionBanner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
  };
  return (
    <div style={backgroundImageStyle} className=" flex flex-col justify-center">
      <Container>
        <div className="text-white flex flex-col gap-6">
          <h1 className="text-6xl font-bold">
          Vision, Mission & Values
         
          </h1>
          <p className="text-lg"> What are we doing, and why are we doing it.</p>
        </div>
      </Container>
    </div>
  );
};

export default MissionBanner;
