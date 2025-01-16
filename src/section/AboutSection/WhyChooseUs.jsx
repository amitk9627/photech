"use client";
import React from "react";
import Banner from "@/assets/heroBanner.jpg";
import { Typewriter } from "react-simple-typewriter";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div className=" flex flex-col gap-8">
          <p className="text-4xl text-[#333] font-bold">
            At Ven India, resource deployment is more than just a service—it’s
            our passion and expertise
          </p>

          <div>
            <p className="text-lg text-[#333]">
              With years of experience in providing skilled professionals across
              various industries, we ensure that every project is equipped with
              the right talent to drive success. Our commitment to excellence in
              resource deployment has made us a trusted partner for clients,
              empowering industries with top-tier engineering resources.
            </p>
          </div>
          <p></p>
        </div>
        <div className="">
          <img
            src={Banner.src}
            alt=""
            className="h-96 object-cover shadow-2xl rounded-tl-[20%] rounded-br-[20%]"
          />
        </div>
      </div>
      <div className="mt-10">
        <div className="text-center">
          <p className="text-2xl font-semibold">This isn’t just our job- </p>
          <p className="text-7xl mt-8">
            It's our{" "}
            <span className="text-blue-500 font-semibold">
              <Typewriter
                words={["promise", "passion", "precision"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
