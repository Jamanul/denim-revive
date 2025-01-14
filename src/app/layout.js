"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import SkeletonLoading from "../../components/SkeletonLoading"; // Import SkeletonLoading
import Cursor from "../../components/Cursor";
import CursorWithRedBorder from "../../components/CursorWithRedBorder";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [dark, setDark] = useState(false); // Dark mode state
  const [isLoading, setIsLoading] = useState(true); // Loading state

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Simulate loading time of 500ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <html className={`${dark ? "dark": ""}`} lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skeleton Loading */}
        {isLoading ? (
          <div className="bg-black min-h-screen flex items-center justify-center">
            <SkeletonLoading />
          </div>
        ) : (
          <>
            {/* Cursor and Red Border Cursor */}
            <Cursor />
            <CursorWithRedBorder />

            {/* Navbar */}
            <header className="dark:bg-primary">
              <nav>
                <Navbar setDark={setDark} dark={dark} />
              </nav>
            </header>

            {/* Main Content */}
            <main >{children}</main>

            {/* Footer */}
            <footer className="dark:bg-primary">
              {/* Footer content */}
            </footer>
          </>
        )}
      </body>
    </html>
  );
}
