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
        y: 100, // Start position (below)
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
    <div className="container mx-auto">
      <div className="text-center h-[80vh] flex justify-center items-center flex-col">
        <div className="overflow-hidden text-center">
          <h2
            style={{ wordSpacing: 0.01 + "em" }}
            className="text-[88px] dark:text-white uppercase font-bold leading-[80px] tracking-tighter"
          >
            DENIM REVIVE
          </h2>
        </div>
        <div className="overflow-hidden text-center">
          <h2
            style={{ wordSpacing: 0.01 + "em" }}
            className="text-[88px] dark:text-white uppercase font-bold leading-[80px] tracking-tighter"
          >
            Wear the change
          </h2>
        </div>
        <div className="overflow-hidden text-center">
          <p className="mt-4 dark:text-white tracking-tighter uppercase font-medium">
            <span className="block">
              "DENIM REVIVE offers sustainably crafted denim products,
            </span>
            <span className="block">
              transforming waste into fashionable, eco-friendly wearables
            </span>
            that make a positive impact on the environment and style."
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <ButtonPrimary text="Explore Work" className={"button-primary"} />
        <ButtonPrimary text="Get in Touch" className={"button-primary"} />
      </div>
    </div>
  );
};

export default Hero;
