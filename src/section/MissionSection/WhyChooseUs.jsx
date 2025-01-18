"use client";
import React from "react";
import Banner from "@/assets/heroBanner.jpg";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex flex-col gap-8 text-lg">
          <h2 className="text-5xl font-semibold">Our Vision</h2>
          <p className="text-[#333] ">
            To build a world of solutions and opportunities for the industry and
            individuals globally.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl font-semibold">Our Vision</h2>
          <p className="text-[#333] ">
            To emerge as a market leader in inventing and implementing
            appropriate trends to resolve the people challenges of the industry,
            while concurrently finding suitable careers for employees.
          </p>
          <ul className="px-10 flex flex-col gap-3 list-disc">
            <li>To make flexibility the future of the workforce.</li>
            <li>To nurture people to yield more value.</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        <div className="flex flex-col gap-8">
          <h2 className="text-5xl font-semibold">Our Vision</h2>

          <ul className="px-10 flex flex-col gap-3 list-disc">
            <li>
              <b>Continuous Improvement:</b> Striving for excellence through
              continuous improvement, we aim for perfection and beyond every
              day.
            </li>
            <li>
              <b>Quality:</b> Quality is the key to survival and competitiveness
              in our view.
            </li>
            <li>
              <b>Accountability:</b> We take ownership of our clients’ problems,
              delivering on promises with the highest level of commitment.
            </li>
            <li>
              <b>Teamwork:</b> We are one team, united by the belief that
              togetherness is strength.
            </li>
            <li>
              <b>People-Centric:</b> Our focus revolves around
              people—evaluating, managing, and developing relationships built on
              trust and mutual respect.
            </li>
            <li>
              <b>Client:</b> We value goodwill above all, believing that our
              clients are our world.
            </li>
            <li>
              <b>Change:</b> Embracing change swiftly, we believe it adds value
              to both the organization and the client.
            </li>
            <li>
              <b>Safety:</b> Safety is our top priority on every project, with
              every client, across all locations.
            </li>
          </ul>
        </div>
        <div>
          <img src={Banner.src} alt="" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
