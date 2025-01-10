"use client";

import { Oswald } from 'next/font/google';
import { useState, useEffect, useRef } from "react";
import Lenis from 'lenis'
import Navbar from "../../components/Navbar";
import SkeletonLoading from "../../components/SkeletonLoading";
import Cursor from "../../components/Cursor";
import CursorWithRedBorder from "../../components/CursorWithRedBorder";
import VideoComponent from '../../components/VideoComponent';
import Hero from '../../components/Hero';

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const lenisRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Initialize Lenis Smooth Scroller
    const lenis = new Lenis({
      duration: 1.2, // Animation duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      smooth: true, // Enable smooth scrolling
    });
    lenisRef.current = lenis;

    const scrollHandler = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollHandler);
    };

    requestAnimationFrame(scrollHandler);

    return () => {
      lenis.destroy();
    };
  }, []);
  const [dark,setDark]=useState(true)
  return (
    <div className={`${oswald.variable} font-sans ${dark ? "dark": ""}`}>
      <Cursor />
      <CursorWithRedBorder />
      {isLoading ? (
        <div className="bg-black min-h-screen flex items-center justify-center">
          <SkeletonLoading />
        </div>
      ) : (
        <>
          <header className="dark:bg-primary">
            <nav>
              <Navbar setDark={setDark} dark={dark}/>
            </nav>
          </header>
          <main className="dark:bg-primary min-h-screen">
            {/* Add your main content here */}
            <Hero/>
            <VideoComponent />
          </main>
          <footer className="dark:bg-primary">
            {/* Footer content */}
          </footer>
        </>
      )}
    </div>
  );
}
