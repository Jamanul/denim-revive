"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import ButtonPrimary from "./ButtonPrimary";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhoWeAre = () => {
    useEffect(() => {
        const splitTypes = document.querySelectorAll(".reveal-types");
        splitTypes.forEach((char, i) => {
          const text = new SplitType(char, { type: "chars" });
          gsap.from(text.chars, {
            scrollTrigger: {
              trigger: char,
              start: "top 80%",
              end: "top 20%",
              scrub: true,
            },
            opacity: 0.2,
            stagger: 0.1,
          });
        });
    
        const animations = [
          { selector: ".left-to-right", x: 0 },
          { selector: ".left-to-right-two", x: 0 },
          { selector: ".go-up-our", y: 0 },
          { selector: ".go-up-two-our", y: 0, delay: 0.5 },
          { selector: ".go-up-three-our", y: 0 },
        ];
    
        animations.forEach((anim) => {
          gsap.to(anim.selector, {
            ...anim,
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: anim.selector,
              start: "top 100%",
              end: "top 60%",
              scrub: true,
            },
          });
        });
      }, []);
    return (
        <div className="container mx-auto flex flex-col md:flex-row md:items-center px-4 md:px-8 lg:px-16">
      {/* Left Section */}
      <div className="flex-1 space-y-6">
        <div
          style={{ transform: "translateX(100px)" }}
          className="left-to-right"
        >
          <h2 className="reveal-types text-5xl md:text-7xl lg:text-8xl dark:text-white uppercase font-bold leading-tight tracking-tighter">
            OUR 
          </h2>
        </div>
        <div
          style={{ transform: "translateX(-150px)" }}
          className="left-to-right-two"
        >
          <h2 className="reveal-types text-5xl md:text-7xl lg:text-8xl dark:text-white uppercase font-bold leading-tight tracking-tighter">
            Products
          </h2>
        </div>
        <div className="space-y-4 mt-6">
          <div className="overflow-hidden dark:text-white text-lg md:text-xl lg:text-2xl">
            <p
              style={{ transform: "translateY(10px)" }}
              className="block go-up-our"
            >
              Sustainable footwear, apparel, home textiles
            </p>
          </div>
          <div className="overflow-hidden dark:text-white text-lg md:text-xl lg:text-2xl">
            <p
              style={{ transform: "translateY(20px)" }}
              className="block go-up-two-our"
            >
              recycled yarn, and arts crafted from
            </p>
          </div>
          <div className="overflow-hidden dark:text-white text-lg md:text-xl lg:text-2xl">
            <p
              style={{ transform: "translateY(30px)" }}
              className="block go-up-three-our"
            >
              recycled denim waste.
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-8 md:mt-0 flex justify-center md:justify-end items-end">
        <ButtonPrimary text={"Explore Products"} />
      </div>
    </div>
    );
};

export default WhoWeAre;