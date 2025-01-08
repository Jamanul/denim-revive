import React from "react";
import ButtonPrimary from "./ButtonPrimary";

const Hero = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center h-[80vh] flex justify-center items-center flex-col">
        <h2
          style={{ wordSpacing: 0.01 + "em" }}
          className="text-[88px] text-white uppercase font-bold leading-[60px] tracking-tighter"
        >
          DENIM REVIVE
          <span className="block leading-[1.1]">
            {" "}
            From Waste to Wearable Denim
          </span>
        </h2>
        <p className="mt-4 text-white tracking-tighter uppercase font-medium">
          <span className="block">
            "DENIM REVIVE offers sustainably crafted denim products,
          </span>{" "}
          <span className="block">
            transforming waste into fashionable, eco-friendly wearables
          </span>{" "}
          that make a positive impact on the environment and style."
        </p>
      </div>
      <div className="flex justify-between items-center">
        <ButtonPrimary text="Explore Work" className={"button-primary"} />
        <ButtonPrimary text="Get in Touch" className={"button-primary"} />
      </div>
    </div>
  );
};

export default Hero;
