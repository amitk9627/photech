import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export const NavProfile = ({ isScrolled, UserDetail }) => {
  const { name } = UserDetail.fields;

  let link =
    "https://img.freepik.com/free-photo/abstract-backdrop-illustration-with-multi-colored-design-shapes-generated-by-ai_188544-15582.jpg?w=826&t=st=1728467006~exp=1728467606~hmac=c100f0944fdf5f469154300322ad2211ce4b98873cfe00ee66f33f15128fcc69";
  return (
    <>
      <p className="flex items-center justify-center gap-2">
        <span>
          {link ? (
            <span className="rounded-full p-2 h-8 w-8 bg-orange-600 flex items-center justify-center text-white font-semibold">
              {String(name)[0]}
            </span>
          ) : (
            <img src={link} alt="" className="rounded-full h-8 w-8" />
          )}
        </span>
        <span className={isScrolled ? "text-[#464646]" : "text-[#fff]"}>
          {name}
        </span>
        <span className="text-white">
          <KeyboardArrowDownIcon />
        </span>
      </p>
    </>
  );
};
