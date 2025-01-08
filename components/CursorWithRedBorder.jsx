"use client";
import React, { useEffect, useState } from "react";

const CursorWithRedBorder = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Dot's actual position
  const [cursor, setCursor] = useState({ x: 0, y: 0 }); // Mouse position

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setPosition((prev) => ({
        x: prev.x + (cursor.x - prev.x) * 0.06, // Slower speed for the border dot
        y: prev.y + (cursor.y - prev.y) * 0.06,
      }));

      animationFrameId = requestAnimationFrame(animate); // Continuously update
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId); // Cleanup on unmount
  }, [cursor]);

  return (
    <div
      style={{
        position: "fixed",
        top: position.y - 18, // Adjust to center the dot
        left: position.x - 18, // Adjust to center the dot
        width: "36px",
        height: "36px",
        border: "1px solid red", // Red border
        borderRadius: "50%",
        pointerEvents: "none", // Ensure it doesn't block interactions
        zIndex: 1000,
        transition: "transform 0.1s ease", // Smooth transition
      }}
    ></div>
  );
};

export default CursorWithRedBorder;
