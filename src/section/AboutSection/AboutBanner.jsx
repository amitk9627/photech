import React from "react";
import Banner from "@/assets/heroBanner.jpg";
import Container from "@/components/Container/Container";
const AboutBanner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "80vh",
  };
  return (
    <div style={backgroundImageStyle} className=" flex flex-col justify-center">
      <Container>
        <div className="text-white flex flex-col gap-6">
          <h1 className="text-6xl font-bold">
            Who We Are: Pioneers in
            <br />
            Skilled Resource Deployment
          </h1>
          <p>Skilled Engineers, Seamless Solutions, Successful Projects</p>
        </div>
      </Container>
    </div>
  );
};

export default AboutBanner;
