"use client";
import React, { useState } from "react";
import Image from "next/image";
import ButtonPrimary from "./ButtonPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import Link from "next/link";

const Navbar = ({ setDark, dark }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    // Animate the menu background
    if (!isMenuOpen) {
      gsap.fromTo(
        ".menu-bg",
        { y: "-100%" },
        { y: "0%", duration: 0.7, ease: "power3.out" }
      );
    } else {
      gsap.to(".menu-bg", {
        y: "-100%",
        duration: 0.7,
        ease: "power3.in",
      });
    }
  };

  return (
    <div className="w-full flex justify-center dark:bg-primary">
      <div className="navbar fixed top-0 z-50 bg-white dark:bg-primary dark:text-white w-full px-4 py-2 flex justify-between items-center container mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          <a className="h-[70px]">
            {dark ? (
              <Image
                src="/images/dm-white.png"
                alt="DenimRevive Logo"
                width={100}
                height={70}
                className=""
              />
            ) : (
              <div className="h-[70px] flex items-center justify-center">
                <Image
                  src="/images/dm-black.png"
                  alt="DenimRevive Logo"
                  width={100}
                  height={70}
                  className=""
                />
              </div>
            )}
          </a>
        </div>

        {/* Dark Mode Toggle */}
        <div className="navbar-center flex justify-center">
          <button
            onClick={() => setDark(!dark)}
            className="border border-primary dark:border-secondary rounded-full py-1 px-2"
          >
            {dark ? (
              <FontAwesomeIcon
                icon={faSun}
                className="h-4 w-4 dark:text-secondary"
              />
            ) : (
              <FontAwesomeIcon icon={faMoon} className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Menu Button */}
        <div className="navbar-end flex justify-end">
          <ButtonPrimary
            text="Menu"
            onClick={toggleMenu}
            className={"button-primary"}
          />
        </div>
      </div>

      {/* Fullscreen Menu */}
      <div
        className={`menu-bg fixed top-0 left-0 w-full h-full dark:bg-primary bg-white z-40 flex flex-col px-[5vh] md:px-[30vh] py-[30vh] md:py-[30vh] dark:text-white`}
        style={{ transform: "translateY(-100%)" }}
      >
        
        <ul className="space-y-4 text-2xl sm:text-4xl md:text-7xl">
          <li>
            <Link href="/" className="nav-item" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-item" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/products" className="nav-item" onClick={toggleMenu}>
              Product
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-item" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
