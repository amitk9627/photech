import React from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import MinorCrashOutlinedIcon from "@mui/icons-material/MinorCrashOutlined";
import { logout } from "@/lib/features/slices/userFormSlice";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import { hideLoader, showLoader } from "@/lib/features/slices/loaderSlice";

export const MiniAboutProfile = ({ setProfileAboutBool }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(showLoader());
    setTimeout(() => {
      dispatch(hideLoader());
      dispatch(logout());
      router.push("/");
      setProfileAboutBool(false);
    }, 1000);
  };
  return (
    <div className=" p-5">
      <div>
        <p className="">
          <Link
            href="/myprofile"
            onClick={() => setProfileAboutBool(false)}
            className=" cursor-pointer  rounded-xl border-none outline-none flex items-center gap-3  w-full hover:bg-blue-100 px-4 py-2 group"
          >
            <span className=" px-0.5 rounded-md">
              <PermIdentityIcon className="text-xl text-[#333]" />
            </span>
            <span className="text-[#333] font-medium group-hover:text-black">
              Manage Profile
            </span>
          </Link>
        </p>
        <p className="">
          <Link
            href="/myBookings"
            onClick={() => setProfileAboutBool(false)}
            className=" cursor-pointer  rounded-xl border-none outline-none flex items-center gap-3  w-full hover:bg-blue-100 px-4 py-2 group"
          >
            <span className=" px-0.5 rounded-md">
              <MinorCrashOutlinedIcon className="text-xl text-[#333]" />
            </span>
            <span className="text-[#333] font-medium group-hover:text-black">
              My Bookings
            </span>
          </Link>
        </p>
        <p className="">
          <Link
            href="/offers"
            onClick={() => setProfileAboutBool(false)}
            className="cursor-pointer  rounded-xl border-none outline-none flex items-center gap-3  w-full hover:bg-blue-100 px-4 py-2 group"
          >
            <span className=" px-0.5 rounded-md">
              <LocalOfferOutlinedIcon className="text-xl text-[#333]" />
            </span>
            <span className="text-[#333] font-medium group-hover:text-black">
              Offers
            </span>
          </Link>
        </p>
        {/* <p className="">
          <button className=" cursor-pointer  rounded-xl border-none outline-none flex items-center gap-3 w-full hover:bg-blue-100 px-4 py-2 group">
            <span className="bg-white px-0.5 rounded-md">
              <AccountBalanceWalletOutlinedIcon className="text-xl text-[#333]" />
            </span>
            <span className="text-[#333] font-medium group-hover:text-black ">
              Wallets & rewards
            </span>
          </button>
        </p> */}
        <p className="">
          <button
            className=" cursor-pointer  rounded-xl border-none outline-none flex items-center gap-3  w-full hover:bg-blue-100 px-4 py-2 group"
            onClick={handleLogout}
          >
            <span className=" px-0.5 rounded-md">
              <LogoutIcon className="text-xl text-[#333]" />
            </span>
            <span className="text-[#333] font-medium group-hover:text-black">
              Logout
            </span>
          </button>
        </p>
      </div>
    </div>
  );
};
