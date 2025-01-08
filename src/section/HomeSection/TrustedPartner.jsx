import React from "react";
import Marquee from "react-fast-marquee";
const TrustedPartner = () => {
  const data = [
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-01.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-02.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-03.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-04.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-05.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-06.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-07.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-08.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-09.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-10.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-11.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-12.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-13.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-14.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-15.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-16.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-17.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-18.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-19.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-20.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-21.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-22.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-23.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-24.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-25.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-26.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-27.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-28.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-29.jpg",
    },
    {
      img: "https://www.venindia.com/wp-content/uploads/2024/09/clients-30.jpg",
    },
  ];
  return (
    <div>
      <div>
        <h2 className="text-6xl font-semibold text-center">Trusted By</h2>
      </div>
      <div className="flex items-center gap-5 justify-center mt-20">
        <Marquee>
          {data.map((item, i) =><img src={item.img} alt="" key={i} className="mx-10" />)}
        </Marquee>
      </div>
    </div>
  );
};

export default TrustedPartner;
