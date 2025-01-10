import React from "react";
import Banner from "@/assets/heroBanner.jpg";

const IndustryWeServe = () => {
  const industries = [
    { title: "Defence & Aerospace", img: Banner.src },
    { title: "Iron & Steel", img: Banner.src },
    { title: "Renewable Energy", img: Banner.src },
    { title: "Oil & Gas", img: Banner.src },
    { title: "Cement", img: Banner.src },
    { title: "Railways & Metro", img: Banner.src },
    { title: "IBMS", img: Banner.src },
    { title: "Automotive", img: Banner.src },
    { title: "Construction", img: Banner.src },
    { title: "Transmission & Distributions", img: Banner.src },
  ];

  return (
    <div>
      <div className="text-center">
        <h2 className="text-5xl font-bold ">Industry We Serve</h2>
        <p className="text-lg mt-7">
          Providing significant and on time solutions for Projects & Engineering
          to our clients
        </p>
      </div>
      <div className="grid grid-cols-5 mt-10 gap-8">
        {industries.map((item, i) => (
          <div key={i} className="shadow-lg p-3 rounded-2xl">
            <div className="flex flex-col gap-5 items-center ">
              <img src={item.img} alt="" className="w-[60px] h-[60px]" />
              <p className="text-lg text-[#333] font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryWeServe;
