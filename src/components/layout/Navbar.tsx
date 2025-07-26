"use client";
import React from "react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CustomTooltip from "../container/CustomTooltipWrapper";

const Navbar = () => {
  const pathname = usePathname();
  const shadowNav = pathname.includes("/anime/");

  return (
    <nav
      className={
        shadowNav
          ? "flex justify-center sm:justify-around items-center mx-auto bg-graynav/[0.5] hover:bg-graynav ease-in-out h-75 transition-all w-full collapse md:visible shadow-filter z-100 relative text-sm text-txnav duration-300 delay-100"
          : "flex justify-center sm:justify-around items-center mx-auto py-2 h-75 w-full bg-graynav relative text-sm text-txnav"
      }
      style={{ height: "75px" }}
    >
      <div>
        <Link href={`/`}>
          <Image alt="logo" width={56} height={56} src={logo} />
        </Link>
      </div>
      <div className="flex justify-center sm:justify-between items-center sm:gap-24">
        <div className="flex cursor-pointer items-center gap-4">
          <Link href={`/search/anime?`}>
            {" "}
            <span className="hover:text-hovnav ml-2 sm:ml-0">Search</span>
          </Link>
          <CustomTooltip title="Coming soon" arrow>
            <span className="hover:text-hovnav">Social</span>
          </CustomTooltip>
          <CustomTooltip title="Coming soon" arrow>
            <span className="hover:text-hovnav">Forum</span>
          </CustomTooltip>
        </div>
        <div className="flex items-center gap-4">
          <CustomTooltip title="Coming soon" arrow>
            <span className=" cursor-pointer hover:text-hovnav ml-4 sm:ml-0">
              Login
            </span>
          </CustomTooltip>
          <CustomTooltip title="Coming soon" arrow>
            <span className="transition ease-in-out delay-150 hover:scale-105 duration-300 mr-4 sm:mr-0 px-2 sm:px-4 py-2 bg-royal hover:bg-blue-50 hover:shadow-filterblue active:bg-blue-50 rounded-md text-white hover:bg-royal cursor-pointer">
              Sign Up
            </span>
          </CustomTooltip>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
