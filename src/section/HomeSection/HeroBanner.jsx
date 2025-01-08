import React from "react";
import Banner from "@/assets/heroBanner.jpg";
import Container from "@/components/Container/Container";
const HeroBanner = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };
  return (
    <div style={backgroundImageStyle} className=" flex flex-col justify-center">
      <Container>
        <div className="text-white flex flex-col gap-6">
          <p className="text-3xl">
            Resource Augmentation Success Partner
          </p>
          <h1 className="text-6xl font-bold">
          Build Your Vision.
          <br/>
          We Deliver the Expertise.
          </h1>
          <p>
            We are empowered to deliver the best resources while constantly
            redefining industry<br/> best practice
          </p>
          <p className="flex items-center gap-5">
            <button className="px-2 py-1 border border-white rounded-lg">button1</button>
            <button className="px-2 py-1 border border-white rounded-lg">button2</button>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HeroBanner;
