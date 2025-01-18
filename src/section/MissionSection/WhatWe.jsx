import React from "react";

const WhatWe = () => {
  const data = [
    {
      img: "",
      title: "Who We Are",
      subTitle: `Ven Consulting India was established in 2010 and became fully operational in 2012. Over the past decade, we have deployed more than 4,800+ engineers across diverse terrains, contributing to 900+ projects and serving 200+ clients. Our commitment to excellence and our ability to adapt to the specific needs of each project has earned us the trust of leading corporates in various industries.`,
    },
    {
      img: "",
      title: "What We Do",
      subTitle: `We specialize in providing skilled resources for Engineering Design, Project Management Services, Pre-Commissioning & Commissioning, and Operations & Maintenance (O&M). Our engineers are engaged in all phases of project development, from initial design and planning to execution, maintenance, and safety assurance. Our key focus areas include: Design, Planning, Execution, Operations, Maintenance, Safety & Quality.`,
    },
    {
      img: "",
      title: "Industries We Serve",
      subTitle: `Our experience spans a wide range of industries, including but not limited to: Oil & Gas, Renewable Energy, Aerospace & Defense, Automotive, Iron & Steel, Transmission & Distribution, Railways & Metro, and Intelligent Building Management Systems (IBMS)`,
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-8 ">
      {data.map((item, i) => (
        <div className="bg-white p-4 text-center rounded-xl" key={i}>
          <h2 className="text-xl font-semibold">{item.title}</h2>
          <p>{item.subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default WhatWe;
