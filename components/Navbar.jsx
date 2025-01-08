"use client";
import React, { useState } from "react";
import Image from "next/image"; // Import Image component
import ButtonPrimary from "./ButtonPrimary";


const Navbar = () => {
  return (
    <div className="navbar text-white container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        {/* Updated the Image tag */}
        <a>
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
           <Image
          src="/images/dm-white.png" // Initial image
          alt="DenimRevive Logo"
          width={100}
          height={70}
          className=""
        />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <ButtonPrimary text="Menu" className={"button-primary"} />
      </div>
    </div>
  );
};

export default Navbar;
