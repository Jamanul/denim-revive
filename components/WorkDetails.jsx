"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const WorkDetails = () => {
  useEffect(() => {
    // Animate image entrance
    const imgElement = document.querySelector(".animated-image");
    if (imgElement) {
      gsap.fromTo(
        imgElement,
        {
          transformOrigin: "bottom right",
          x: 600,
          rotation: 45,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".image-container",
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
    const items = document.querySelectorAll(".list-item");
    const indicator = document.querySelector(".dot-indicator");

    items.forEach((item) => {
      item.addEventListener("mouseenter", (e) => {
        const { offsetTop, offsetHeight } = e.target;
        gsap.to(indicator, {
          y: offsetTop + offsetHeight / 2 - 4,
          opacity: 1,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(e.target, {
          x: 10,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      item.addEventListener("mouseleave", (e) => {
        gsap.to(indicator, {
          opacity: 0,
          duration: 0.3,
          ease: "power3.out",
        });
        gsap.to(e.target, {
          x: 0,
          duration: 0.3,
          ease: "power3.out",
        });
      });
    });
  }, []);

  return (
    <div className="work-details-container container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
      {/* Text Content */}
      <div className="text-content w-full md:w-1/2 md:pr-8">
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 dark:text-white">
            The Future We Envision
          </h2>

          {/* Dot Indicator */}
          <div
            className="dot-indicator w-3 h-3 rounded-full bg-secondary absolute md:left-6 opacity-0"
            style={{ top: 0 }}
          ></div>

          {/* List */}
          <ul className="pl-4 md:pl-12 space-y-4 text-base md:text-lg leading-relaxed dark:text-white">
            <li className="list-item relative ">
              To revolutionize the global fashion industry by creating a
              circular denim ecosystem where zero waste is a reality.
            </li>
            <li className="list-item relative ">
              Transform every discarded piece of denim into something
              extraordinary.
            </li>
            <li className="list-item relative ">
              Envision a future where sustainability is at the heart of fashion.
            </li>
            <li className="list-item relative ">
              Redefine how the world produces, consumes, and reuses denim.
            </li>
            <li className="list-item relative ">
              Lead the charge against environmental degradation.
            </li>
            <li className="list-item relative ">
              Inspire a world where style and sustainability coexist
              harmoniously.
            </li>
            <li className="list-item relative ">
              Leave a lasting positive impact on the planet and future
              generations.
            </li>
          </ul>
        </div>
      </div>

      {/* Image */}
      <div className="image-container w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/images/test.jpg"
          alt="Circular Denim Vision"
          width={800}
          height={400}
          className="animated-image w-full md:w-[80%] h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WorkDetails;
