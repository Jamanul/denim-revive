import React, { useEffect } from "react";
import { gsap } from "gsap";
import ButtonPrimary from "./ButtonPrimary";

const Hero = () => {
  useEffect(() => {
    // GSAP animation for the first h2
    gsap.fromTo(
      "h2:nth-of-type(1)", // First h2
      {
        opacity: 0,
        y: 100, // Start position (below)
      },
      {
        opacity: 1,
        y: 0, // End position (normal)
        duration: 1, // Duration of the animation
        ease: "power3.out", // Smooth easing
      }
    );

    // GSAP animation for the second h2
    gsap.fromTo(
      "h2:nth-of-type(2)", // Second h2
      {
        opacity: 0,
        y: 100, // Start position (below)
      },
      {
        opacity: 1,
        y: 0, // End position (normal)
        duration: 1, // Duration of the animation
        ease: "power3.out", // Smooth easing
        delay: 0.3, // Delay to create a sequential effect
      }
    );

    // GSAP animation for the paragraph
    gsap.fromTo(
      "p",
      {
        opacity: 0.5,
        y: 120, // Start position (below)
      },
      {
        opacity: 1,
        y: 0, // End position (normal)
        duration: 1.2,
        ease: "power3.out", // Smooth easing
        delay: 0.6, // Further delay for sequence
      }
    );
  }, []);

  return (
    <div className="container mx-auto px-4">
    <div className="text-center h-[70vh]  md:h-[80vh] flex justify-center items-center flex-col">
      <div className="overflow-hidden text-center">
        <h2
          style={{ wordSpacing: 0.01 + "em" }}
          className="text-[40px] sm:text-[48px] md:text-[64px] lg:text-[88px] dark:text-white uppercase font-bold leading-[40px] sm:leading-[56px] md:leading-[70px] lg:leading-[80px] tracking-tighter"
        >
          DENIM REVIVE
        </h2>
      </div>
      <div className="overflow-hidden text-center">
        <h2
          style={{ wordSpacing: 0.01 + "em" }}
          className="text-[40px] sm:text-[48px] md:text-[64px] lg:text-[88px] dark:text-white uppercase font-bold leading-[40px] sm:leading-[56px] md:leading-[70px] lg:leading-[80px] tracking-tighter"
        >
          Wear the change
        </h2>
      </div>
      <div className="overflow-hidden text-center">
        <p className="mt-4 text-sm sm:text-base md:text-lg dark:text-white tracking-tighter uppercase font-medium">
          <span className="clear md:block ">
            "DENIM REVIVE offers sustainably crafted denim products,
          </span>
          <span className="clear md:block ">
            transforming waste into fashionable, eco-friendly wearables
          </span>
          <span className="clear md:block ">
            that make a positive impact on the environment and style."
          </span>
        </p>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mt-8 space-y-4 sm:space-y-0 sm:space-x-4">
      <ButtonPrimary text="Explore Work" className={"button-primary"} />
      <ButtonPrimary text="Get in Touch" className={"button-primary"} />
    </div>
  </div>
  );
};

export default Hero;
