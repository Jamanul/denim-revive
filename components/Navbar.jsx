"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image component
import ButtonPrimary from "./ButtonPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setDark, dark }) => {
  return (
<div className="w-full flex justify-center">
<div className="navbar fixed top-0 z-50 bg-white dark:bg-primary dark:text-white w-full px-4 py-2 flex justify-between items-center container mx-auto">
  <div className="navbar-start">
    {/* Updated the Image tag */}
    <a className="h-[70px] ">
      {dark ? (
        <Image
          src="/images/dm-white.png" // Initial image
          alt="DenimRevive Logo"
          width={100}
          height={70}
          className=""
        />
      ) : (
        <div className="h-[70px] flex items-center justify-center">
          <Image
            src="/images/dm-black.png" // Initial image
            alt="DenimRevive Logo"
            width={100}
            height={70}
            className=""
          />
        </div>
      )}
    </a>
  </div>
  
  <div className="navbar-center flex justify-center">
    <button
      onClick={() => setDark(!dark)}
      className="border border-primary dark:border-secondary rounded-full py-1 px-2"
    >
      {dark ? (
        <FontAwesomeIcon icon={faSun} className="h-4 w-4 dark:text-secondary" /> // h-4 and w-4 for 16px
      ) : (
        <FontAwesomeIcon icon={faMoon} className="h-4 w-4" />
      )}
    </button>
  </div>
  
  <div className="navbar-end flex justify-end">
    <ButtonPrimary text="Menu" className={"button-primary"} />
  </div>
</div>
</div>

  );
};

export default Navbar;
