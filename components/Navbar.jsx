"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image component
import ButtonPrimary from "./ButtonPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ setDark, dark }) => {
  return (
    <div className="navbar dark:text-white items-center  container mx-auto">
      <div className="navbar-start">
        {/* Updated the Image tag */}
        <a className="h-[70px] ">
          {/* <div className="logo-container relative">
        <Image
          src="/images/dm-white.png" // Initial image
          alt="DenimRevive Logo"
          width={100}
          height={70}
          className="logo-image first absolute"
        />
        <Image
          src="/images/dm-black.png" // New image on hover
          alt="DenimRevive Logo"
          width={100}
          height={70}
          className="logo-image second absolute"
        />
      </div> */}
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
      <div className="navbar-center flex">
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
      <div className="navbar-end">
        <ButtonPrimary text="Menu" className={"button-primary"} />
      </div>
    </div>
  );
};

export default Navbar;
