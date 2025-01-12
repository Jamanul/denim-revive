"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoComponent() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate scale and translateY of the growDiv with a gradual transition
    gsap.to(".growDiv", {
      scale: 10, // Scale the div by 10 times
      y: 0, // Set translateY to 0 after animation
      ease: "power1.inOut", // Smooth easing for a more natural transition
      transformOrigin: "center center", // Make sure it scales from the center
      scrollTrigger: {
        trigger: ".growDiv", // Element that triggers the scroll
        start: "top center", // Start animation when the top of growDiv reaches the center of the viewport
        end: "bottom center", // End animation when the bottom of growDiv reaches the center of the viewport
        scrub: 1, // Smoothly ties animation to scroll with a delay for smoothness
        pin: true, // Pin the element during animation
      },
    });
  }, []);

  return (
    <div className="h-[100vh] flex items-center relative justify-center dark:bg-primary">
      {/* Scrollable Content */}
      <div
        className="growDiv w-8 md:w-16 lg:w-32 aspect-video flex items-center justify-center rounded-[6%] overflow-hidden"
    
        data-desktop-transform="translateY(-500px)" // Optional for clarity
      >
        <video
          src="/video/DR%20Website.mov"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
        />
      </div>
    </div>
  );
}
