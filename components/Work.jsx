"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import ButtonPrimary from "./ButtonPrimary";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Work = () => {
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
          markers: false,
        },
        opacity: 0.2,
        stagger: 0.1,
      });
    });
    gsap.to(".left-to-right", {
      x: 0, // Set translateY to 0 after animation
      ease: "power1.inOut", // Smooth easing for a more natural transition
      scrollTrigger: {
        trigger: ".left-to-right", // Element that triggers the scroll
        start: "top 80%",
        end: "top 20%", // End animation when the bottom of growDiv reaches the center of the viewport
        scrub: true, // Smoothly ties animation to scroll with a delay for smoothness
      },
    });
    gsap.to(".left-to-right-two", {
      x: 0, // Set translateY to 0 after animation
      ease: "power1.inOut", // Smooth easing for a more natural transition
      scrollTrigger: {
        trigger: ".left-to-right", // Element that triggers the scroll
        start: "top 80%",
        end: "top 20%", // End animation when the bottom of growDiv reaches the center of the viewport
        scrub: true, // Smoothly ties animation to scroll with a delay for smoothness
      },
    });
    gsap.to(".go-up", {
      y: 0, // Set translateY to 0 after animation
      ease: "power1.inOut", // Smooth easing for a more natural transition
      scrollTrigger: {
        trigger: ".go-up", // Element that triggers the scroll
        start: "top 100%",
        end: "top 60%", // End animation when the bottom of growDiv reaches the center of the viewport
        scrub: true, // Smoothly ties animation to scroll with a delay for smoothness
      },
    });
    gsap.to(".go-up-two", {
      y: 0, // Set translateY to 0 after animation
      ease: "power1.inOut", // Smooth easing for a more natural transition
      scrollTrigger: {
        trigger: ".go-up-two", // Element that triggers the scroll
        start: "top 100%",
        end: "top 60%", // End animation when the bottom of growDiv reaches the center of the viewport
        scrub: true, // Smoothly ties animation to scroll with a delay for smoothness
      },
      delay:0.5,
    });
    gsap.to(".go-up-three", {
      y: 0, // Set translateY to 0 after animation
      ease: "power1.inOut", // Smooth easing for a more natural transition
      scrollTrigger: {
        trigger: ".go-up-three", // Element that triggers the scroll
        start: "top 100%",
        end: "top 60%", // End animation when the bottom of growDiv reaches the center of the viewport
        scrub: true, // Smoothly ties animation to scroll with a delay for smoothness
      },
      
    });
  }, []);

  return (
    <div className="flex container mx-auto">
      <div className="flex-1 ">
        <div
          style={{ transform: "translateX(100px)" }}
          className="left-to-right "
        >
          <h2 className="reveal-types  text-[88px] dark:text-white uppercase font-bold leading-[70px] tracking-tighter">
            OUR vision &
          </h2>
        </div>
        <div
          style={{ transform: "translateX(-150px)" }}
          className="left-to-right-two "
        >
          <h2 className="reveal-types text-[88px] dark:text-white uppercase font-bold leading-[70px] tracking-tighter">
            Mission
          </h2>
        </div>
        <div className="overflow-hidden dark:text-white mt-12 text-2xl ">
          <p style={{ transform: "translateY(10px)" }} className="block go-up">
            Revolutionizing denim through
          </p>{" "}
        </div>
        <div className="overflow-hidden dark:text-white text-2xl ">
          <p style={{ transform: "translateY(20px)" }} className="block go-up-two">
            sustainability, innovation, circularity,
          </p>{" "}
        </div>
        <div className="overflow-hidden dark:text-white text-2xl ">
          <p style={{ transform: "translateY(30px)" }} className="block go-up-three">
            and eco-conscious fashion."
          </p>{" "}
        </div>
      </div>
      <div className="flex justify-end items-end">  
            <ButtonPrimary text={"Explore Work"}/>
      </div>
    </div>
  );
};

export default Work;
