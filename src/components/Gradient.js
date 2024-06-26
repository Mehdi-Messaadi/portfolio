import React, { useState, useEffect } from "react";

import "../styles/gradient-sphere.css";

const GradientSphere = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="gradient-sphere"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
};

export default GradientSphere;
