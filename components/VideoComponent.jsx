"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function VideoComponent() {

  return (
    <div className="relative  overflow-hidden dark:bg-primary">
      {/* Video Section */}
      <div className="growDiv w-full container mx-auto my-24 aspect-video relative flex items-center justify-center">
        {/* Uncomment the video element if required */}
        <video
          src="/video/DR%20Website.mov"
          className="w-full h-full object-cover rounded-xl"
          autoPlay
          loop
          muted
        />
        
      </div>
    </div>
  );
}
