import React from "react";
// import FooterWtiWhiteLogo from "../../assets/image/footer_wti_white_logo.svg";

import Link from "next/link";

// const bgImage = {
//   backgroundImage: `url(${FooterBgImg.src})`,
// };

const socialMediaArr = [
  {
    img: "",
    link: "",
    alt: "",
  },
  {
    img: "",
    link: "",
    alt: "",
  },
  {
    img: "",
    link: "",
    alt: "",
  },
  {
    img: "",
    link: "",
    alt: "",
  },
  {
    img: "",
    link: "",
    alt: "",
  },
];

const companyLinksOption = [
  {
    text: "About Us",
    href: "/about",
  },
  {
    text: "About Us",
    href: "/About Us",
  },
  {
    text: "About Us",
    href: "",
  },
  {
    text: "About Us",
    href: "/About Us",
  },
  {
    text: "About Us",
    href: "/About Us",
  },

  {
    text: "About Us",
    href: "/About Us",
  },
];

const quickLinksOption = [
  {
    text: "About Us",
    href: "",
  },
  {
    text: "About Us",
    href: "",
  },
  {
    text: "About Us",
    href: "/About Us",
  },
  {
    text: "About Us",
    href: "/About Us",
  },
  {
    text: "About Us",
    href: "/About Us",
  },
];

const serviceLinksOption = [
  {
    text: "About Us",
    href: "",
  },
  {
    text: "About Us",
    href: "/About Us",
  },
  {
    text: "About Us",
    href: "",
  },
  {
    text: "About Us",
    href: "/About Us",
  },
];

const Footer = () => {
  return (
    <div className="w-full my_bg_image bg-black">
      {/* style={bgImage} */}
      <div className="w-[1200px] mx-auto py-[80px]">
        <div className="w-full grid gap-6 grid-cols-[1fr_4fr]">
          <div className="flex flex-col">
            <div className="mb-5 bg-white p-5">
              <Link href="/">
                <img src="./next.svg" width={160} alt="" />
              </Link>
            </div>
            <h3 className="text-[#ffffff] text-[20px] font-medium my-5">
              Follow Us
            </h3>
            {/* <div className="flex gap-3 items-center">
              {socialMediaArr.map((item, index) => {
                return (
                  <Link href={item.link} target="_blank" key={index}>
                    <img src={item.img.src} width={28} alt="" key={index} />
                  </Link>
                );
              })}
            </div> */}
          </div>
          <div className="grid grid-cols-4">
            <div>
              <h3 className="text-[#FFFFFF] text-[20px] leading-[36px] font-medium mb-3">
                Company
              </h3>
              <ul className="">
                {companyLinksOption.map((item, index) => {
                  return (
                    <li
                      className="text-[14px] text-[#E2E2F4] font-normal leading-[16px] mb-3"
                      key={index}
                    >
                      <Link href={item?.href}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-[#FFFFFF] text-[20px] leading-[36px] font-medium mb-3">
                Quick Links
              </h3>
              <ul className="">
                {quickLinksOption.map((item, index) => {
                  return (
                    <li
                      className="text-[14px] text-[#E2E2F4] font-normal leading-[16px] mb-3"
                      key={index}
                    >
                      <Link href={item.href}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-[#FFFFFF] text-[20px] leading-[36px] font-medium mb-3">
                Services
              </h3>
              <ul className="">
                {serviceLinksOption.map((item, index) => {
                  return (
                    <li
                      className="text-[14px] text-[#E2E2F4] font-normal leading-[16px] mb-3"
                      key={index}
                    >
                      <Link href={item.href}>{item.text}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3 className="text-[#FFFFFF] text-[20px] leading-[36px] font-medium mb-3">
                Get in touch
              </h3>
              <div className="flex gap-3 items-center mb-3">
                {/* <img src={FooterCallImg.src} alt="" /> */}
                <p className="text-[#ffffff] font-normal text-[14px]">
                  <span>
                     <Link href="">+91 xx xxxx xxxx</Link>
                  </span>
                  ,<br />
                  <span>
                    <Link href="">+91 xx xxxx xxxx</Link>
                  </span>
                </p>
              </div>
              <div className="flex gap-3 items-center mb-3">
                {/* <img src={FooterMailImg.src} alt="" /> */}
                <p className="text-[#ffffff] font-normal text-[14px]">
                  <span>
                    
                  </span>
                </p>
              </div>
              <div className="flex gap-3 items-start mb-3">
                {/* <img src={FooterLocationImg.src} alt="" /> */}
                <p className="text-[#ffffff] font-normal text-[14px]">
                  <span>
                   Noida
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 border-t-[1px] border-[#e7e6e830]">
        <p className="text-[#ffffff] text-center text-nowrap text-[16px] font-normal leading-[20px] ">
          Copyright by PhoTech IT Solution Pvt Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
