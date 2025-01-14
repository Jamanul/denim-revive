"use client";
import React, { useEffect } from "react";
import { gsap as customGsap } from "gsap"; // Renamed gsap to customGsap
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

customGsap.registerPlugin(ScrollTrigger);

const ProductsThree = () => {
  useEffect(() => {
    // Animate image entrance
    const imgElement = document.querySelector(".gsap-image-work-three");
    if (imgElement) {
      customGsap.fromTo(
        imgElement,
        {
          transformOrigin: "bottom left",
          x: -600,
          rotation: -45,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".gsap-image-container-three",
            start: "top 90%",
            end: "top 40%",
            scrub: 1,
          },
          x: 0,
          rotation: 0,
          opacity: 1,
          duration: 2,
          ease: "power2.out",
        }
      );
    }
  }, []);

  useEffect(() => {
    // Animate list items with arrow
    const items = document.querySelectorAll(".list-item-work");

    items.forEach((item) => {
      const arrow = item.querySelector(".arrow-work");

      item.addEventListener("mouseenter", () => {
        customGsap.to(item, {
          x: 10,
          duration: 0.4,
          ease: "power3.out",
        });
        customGsap.to(arrow, {
          x: 10,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        customGsap.to(item, {
          x: 0,
          duration: 0.4,
          ease: "power3.out",
        });
        customGsap.to(arrow, {
          x: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  }, []);
  return (
    <div className="work-details-container gap-4 md:gap-8 lg:gap-0 pb-8 md:mb-16 lg:mb-0 flex flex-col-reverse lg:flex-row container mx-auto px-4 lg:px-8 h-auto lg:h-[90vh] items-center space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Image */}
      <div className="gsap-image-container-three w-full lg:w-1/2 flex justify-center lg:justify-start">
        <Image
          src="/images/IMG-20240927-WA0057.jpg"
          alt="Circular Denim Vision"
          width={800}
          height={400}
          className="gsap-image-work-three w-full lg:w-[80%] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="text-content w-full lg:w-1/2">
        <div className="relative">
          <h2 className="text-3xl lg:text-6xl font-bold mb-4 dark:text-white">
            Arts & Crafts
          </h2>

          {/* List */}
          <ul className="pl-4 lg:pl-12 space-y-4 text-sm lg:text-lg leading-relaxed dark:text-white">
            {[
              "Reducing environmental impact by addressing the denim industry’s water consumption, pollution, and waste challenges.",
              "Empowering communities through job creation, skill development, and fostering economic opportunities within local ecosystems.",
              "Advancing circularity by championing resource efficiency, eco-conscious design, and collaboration with global stakeholders.",
              "Educating and inspiring consumers to make informed, sustainable choices, promoting a cultural shift towards environmentally responsible fashion.",
              "Setting new standards for sustainability in the fashion industry, combining quality, comfort, and eco-consciousness in every product we create.",
            ].map((text, index) => (
              <li
                key={index}
                className="list-item-work relative flex items-start space-x-4"
              >
                {/* Arrow */}
                <span
                  className="arrow-work text-secondary font-bold text-lg transition-transform duration-300"
                  style={{ display: "inline-block" }}
                >
                  →
                </span>
                {/* Text */}
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsThree;
