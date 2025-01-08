"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoComponent() {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate width and height of the growDiv
    gsap.to(".growDiv", {
    scale:10,
      ease: "none", // Linear growth without easing
      scrollTrigger: {
        trigger: ".growDiv", // Element that triggers the scroll
        start: "top center", // Start animation when growDiv is 20% into the viewport
        end: "bottom center", // End animation when growDiv is 80% into the viewport
        scrub: true, // Smoothly ties animation to scroll position
        pin: true, // Pin the element during animation
      },
    });
  }, []);

  return (
    <div className="h-[200vh] flex items-center justify-center">
      {/* Scrollable Content */}
      <div className="growDiv w-32 h-32 flex items-center justify-center rounded-md overflow-hidden ">
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

