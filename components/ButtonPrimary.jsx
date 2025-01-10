import React, { useEffect, useRef } from "react";
import "./css/buttom.css";
const ButtonPrimary = ({ text, onClick, className, type = "button" }) => {
  const btnRef = useRef(null); // Create a ref to reference the button element

  useEffect(() => {
    const btn = btnRef.current; // Get the button element

    const handleMouseMove = (e) => {
      if (btn) {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
      }
    };

    // Add mousemove event listener
    if (btn) {
      btn.addEventListener("mousemove", handleMouseMove);
    }

    // Cleanup the event listener when the component is unmounted
    return () => {
      if (btn) {
        btn.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []); // Empty array to ensure this runs once after component mounts

  return (
    <button
      ref={btnRef} // Assign the ref to the button
      type={type}
      className={`${className} button-primary border-primary border-2 dark:border-secondary hover:!text-black dark:hover:!text-black`} // Add the dark hover class
      onClick={onClick}
    >
      <span className="z-10 dark:text-secondary hover:!text-black dark:hover:!text-black px-8 py-3 `">{text}</span>
    </button>
  );
};

export default ButtonPrimary;
