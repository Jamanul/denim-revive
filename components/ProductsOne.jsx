"use client";
import React, { useEffect } from "react";
import { gsap as motionEngine } from "gsap"; // Renamed gsap to motionEngine
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

motionEngine.registerPlugin(ScrollTrigger);

const ProductsOne = () => {
  useEffect(() => {
    // Animate image entrance
    const imgElement = document.querySelector(".animated-img-product-one");
    if (imgElement) {
      motionEngine.fromTo(
        imgElement,
        {
          transformOrigin: "bottom left",
          x: -600,
          rotation: -45,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".gsap-image-container-one",
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
        motionEngine.to(item, {
          x: 10,
          duration: 0.4,
          ease: "power3.out",
        });
        motionEngine.to(arrow, {
          x: 10,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        motionEngine.to(item, {
          x: 0,
          duration: 0.4,
          ease: "power3.out",
        });
        motionEngine.to(arrow, {
          x: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <div className="work-details-container flex flex-col-reverse lg:flex-row container mx-auto px-4 lg:px-8 h-auto lg:h-[90vh] items-center space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Image */}
      <div className="gsap-image-container-one w-full lg:w-1/2 flex justify-center lg:justify-start">
        <Image
          src="/images/IMG-20240927-WA0058.jpg"
          alt="Circular Denim Vision"
          width={800}
          height={400}
          className="animated-img-product-one w-full lg:w-[80%] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="text-content w-full lg:w-1/2">
        <div className="relative">
          <h2 className="text-3xl lg:text-6xl font-bold mb-4 dark:text-white">
            Apparel
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

export default ProductsOne;
