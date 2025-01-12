"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ProductsTwo = () => {
  useEffect(() => {
    // Animate image entrance
    const imgElement = document.querySelector(".animated-img-product-two");
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
            trigger: ".gsap-image-container-two",
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
    // Animate list items
    const items = document.querySelectorAll(".gsap-list-item");

    items.forEach((item) => {
      const arrow = item.querySelector(".gsap-arrow");

      item.addEventListener("mouseenter", () => {
        gsap.to(item, {
          x: 10,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(arrow, {
          x: 10,
          duration: 0.3,
          ease: "power3.out",
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(item, {
          x: 0,
          duration: 0.4,
          ease: "power3.out",
        });
        gsap.to(arrow, {
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
          Textiles
          </h2>

          {/* List */}
          <ul className="pl-4 md:pl-12 space-y-8 text-base md:text-lg leading-relaxed dark:text-white ">
            {[
              "DenimRevive footwear is crafted from upcycled denim waste, showcasing a commitment to reducing environmental impact.",
              "By utilizing denim waste, DenimRevive helps reduce landfill burden, water pollution, and CO₂ emissions.",
              "Offering a range of styles from casual sneakers to standout designs, the collection caters to modern, eco-conscious consumers.",
              "DenimRevive creates opportunities for artisans and local communities, with a special focus on empowering women workers.",
              "Each pair of footwear merges contemporary design, comfort, and environmental responsibility, supporting a sustainable and inclusive future.",
            ].map((text, index) => (
              <li
                key={index}
                className="gsap-list-item relative flex items-start space-x-4 "
              >
                {/* Arrow */}
                <span
                  className="gsap-arrow text-secondary font-bold text-lg transition-transform duration-300"
                  style={{ display: "inline-block" }}
                >
                  →
                </span>
                {/* Text */}
                <span className="text-content-li">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Image */}
      <div className="gsap-image-container-two w-full md:w-1/2 flex justify-center md:justify-end">
        <Image
          src="/images/IMG-20240927-WA0057.jpg"
          alt="Circular Denim Vision"
          width={800}
          height={400}
          className="animated-img-product-two w-full md:w-[80%] h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ProductsTwo;
