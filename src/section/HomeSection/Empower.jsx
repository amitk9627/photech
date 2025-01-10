import React from "react";
import Banner from "@/assets/heroBanner.jpg";
import Container from "@/components/Container/Container";
const Empower = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Banner.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "70vh",
  };
  return (
    <div style={backgroundImageStyle} className=" flex flex-col justify-center">
      <Container>
        <div className="text-white flex flex-col gap-4 w-1/2">
          <h2 className="text-5xl font-bold">
            Build Your Vision.
            <br />
            We Deliver the Expertise.
          </h2>
          <p className="">
            At VEN, we empower you to build a career that aligns with your
            background, ambitions, and lifestyle. This is a place where
            collaboration thrives, your insights matter, and you’re encouraged
            to create a work style that’s uniquely yours. Together, let’s drive
            innovation and create a positive impact on the industries we serve.
          </p>
          <p className="">
            <button className="px-2 py-1 border border-white rounded-lg">
              button1
            </button>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Empower;
