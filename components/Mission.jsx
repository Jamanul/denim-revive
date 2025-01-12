"use client";
import React, { useEffect } from "react";
import { gsap as customGsap } from "gsap"; // Renamed gsap to customGsap
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

customGsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  useEffect(() => {
    const imgElement = document.querySelector(".animated-image-work");
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
            trigger: ".image-container-work",
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
    const items = document.querySelectorAll(".list-item-work");
    const indicator = document.querySelector(".dot-indicator-work");

    items.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        const { offsetTop, offsetHeight } = e.target;
        customGsap.to(indicator, {
          y: offsetTop + offsetHeight / 2 - 4,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        });
        customGsap.to(e.target, {
          x: 10,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      item.addEventListener("mouseleave", (e) => {
        customGsap.to(indicator, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.out",
        });
        customGsap.to(e.target, {
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
      <div className="image-container-work w-full lg:w-1/2 flex justify-center lg:justify-start">
        <Image
          src="/images/test.jpg"
          alt="Circular Denim Vision"
          width={800}
          height={400}
          className="animated-image-work w-full lg:w-[80%] h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Text Content */}
      <div className="text-content w-full lg:w-1/2">
        <div className="relative">
          <h2 className="text-3xl lg:text-6xl font-bold mb-4 dark:text-white">
            Our Commitment to Sustainability
          </h2>

          {/* Dot Indicator */}
          <div
            className="dot-indicator-work w-3 h-3 rounded-full bg-secondary absolute md:left-6 opacity-0"
            style={{ top: 0 }}
          ></div>

          {/* List */}
          <ul className="pl-4 lg:pl-12 space-y-4 text-sm lg:text-lg leading-relaxed dark:text-white">
            <li className="list-item-work relative ">
              Reducing environmental impact by addressing the denim industry’s
              water consumption, pollution, and waste challenges.
            </li>
            <li className="list-item-work relative ">
              Empowering communities through job creation, skill development,
              and fostering economic opportunities within local ecosystems.
            </li>
            <li className="list-item-work relative ">
              Advancing circularity by championing resource efficiency,
              eco-conscious design, and collaboration with global stakeholders.
            </li>
            <li className="list-item-work relative ">
              Educating and inspiring consumers to make informed, sustainable
              choices, promoting a cultural shift towards environmentally
              responsible fashion.
            </li>
            <li className="list-item-work relative ">
              Setting new standards for sustainability in the fashion industry,
              combining quality, comfort, and eco-consciousness in every
              product we create.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mission;
