"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WorkDetails = () => {
  useEffect(() => {
    // Animate image entrance with an angular effect from bottom-right corner
    const imgElement = document.querySelector(".animated-image");
    if (imgElement) {
      gsap.fromTo(
        imgElement,
        {
          transformOrigin: "bottom right", // Pivot point for rotation
          x: 200, // Starting horizontal offset
          y: 200, // Starting vertical offset
          rotation: 45, // Start with -45 degrees rotation
          opacity: 0, // Start fully transparent
        },
        {
          scrollTrigger: {
            trigger: ".image-container",
            start: "top 80%", // Animation starts when section reaches 80% of viewport
            end: "top 50%", // Ends when section reaches 50% of viewport
            scrub: true, // Smooth scrolling
          },
          x: 0, // Move to its natural horizontal position
          y: 0, // Move to its natural vertical position
          rotation: 0, // End with no rotation
          opacity: 1, // Fully visible at the end
          duration: 1.5, // Animation duration
          ease: "power3.out", // Smooth easing
        }
      );
    }
  }, []);
  useEffect(() => {
    const items = document.querySelectorAll(".list-item");
    const indicator = document.querySelector(".dot-indicator");

    items.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        const { offsetTop, offsetHeight } = e.target;
        gsap.to(indicator, {
          y: offsetTop + offsetHeight / 2 - 4, // Adjust dot position to match the middle of the item
          opacity: 1, // Ensure visibility
          duration: 0.3, // Smooth animation
          ease: "power3.out",
        });
        gsap.to(e.target, {
          x: 10, // Slightly shift the item to the right
          duration: 0.3,
          ease: "power3.out",
        });
      });

      item.addEventListener("mouseleave", (e) => {
        gsap.to(indicator, {
          opacity: 0, // Hide the dot smoothly
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(e.target, {
          x: 0, // Reset the item's position
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  }, []);
  return (
    <div className="work-details-container flex container mx-auto h-[100vh] items-center">
      {/* Text Content */}
      <div className="text-content w-1/2 pr-8">
      <div className="relative pl-10">
      <h2 className="text-6xl font-bold mb-4 dark:text-white">The Future We Envision</h2>

      {/* Dot Indicator */}
      <div
        className="dot-indicator w-3 h-3 rounded-full bg-secondary absolute left-16 opacity-0"
        style={{ top: 0 }}
      ></div>

      {/* List */}
      <ul className="pl-12 space-y-4 text-lg leading-relaxed dark:text-white">
        <li className="list-item relative cursor-pointer">
          To revolutionize the global fashion industry by creating a circular
          denim ecosystem where zero waste is a reality.
        </li>
        <li className="list-item relative cursor-pointer">
          Transform every discarded piece of denim into something extraordinary.
        </li>
        <li className="list-item relative cursor-pointer">
          Envision a future where sustainability is at the heart of fashion.
        </li>
        <li className="list-item relative cursor-pointer">
          Redefine how the world produces, consumes, and reuses denim.
        </li>
        <li className="list-item relative cursor-pointer">
          Lead the charge against environmental degradation.
        </li>
        <li className="list-item relative cursor-pointer">
          Inspire a world where style and sustainability coexist harmoniously.
        </li>
        <li className="list-item relative cursor-pointer">
          Leave a lasting positive impact on the planet and future generations.
        </li>
      </ul>
    </div>
      </div>

      {/* Image */}
      <div className="image-container w-1/2 flex justify-end ">
        <Image
          src="/images/test.jpg"
          alt="Circular Denim Vision"
          width={800}
          height={400}
          className="animated-image w-[80%] h-auto rounded-lg shadow-lg "
        />
      </div>
    </div>
  );
};

export default WorkDetails;
