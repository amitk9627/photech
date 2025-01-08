"use client";
import React, { useEffect, useState, useRef } from "react";
// import DropDownArrowImg from "../../assets/image/dropdown_arrow_img.svg";
import Link from "next/link";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const homeRoute = usePathname();

  // ------------------------------------ Login form

  // scroll function ----------
  const onScrollHandler = (event) => {
    if (window.scrollY > 120) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  // ----------- scroll ----
  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);
    return () => {
      window.removeEventListener("scroll", onScrollHandler);
    };
  }, []);

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);
  const navArr = ["/"];
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full py-2 z-[999] ${
          isScrolled || !navArr.includes(homeRoute)
            ? "bg-white shadow-[0px_1px_0px_0px_rgba(145_143_145_0.74)] stickyHeader"
            : ""
        }`}
      >
        <div className="w-[1200px] mx-auto">
          <div className="flex justify-between items-center ">
            {/* <Image /> */}
            <Link href="/">
              <div className="cursor-pointer">
                <img
                  src={
                    isScrolled || !navArr.includes(homeRoute)
                      ? "./next.svg"
                      : "./next.svg"
                  }
                  width={140}
                  alt=""
                />
              </div>
            </Link>

            <div className="flex gap-4">
              <div className="cursor-pointer flex gap-1 items-center py-1 px-3 rounded-[8px] bg-[#78AEFF] backdrop-blur-[8px]">
                <div className="flex gap-1 items-center text-[#fff] text-[14px] cursor-pointer">
                  <span className="cursor-pointer">
                    Login or Create Account
                  </span>
                </div>
                {/* <img src={DropDownArrowImg.src} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
