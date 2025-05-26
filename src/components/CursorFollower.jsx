import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CursorFollower() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="hidden sm:block"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 50,
        height: 50,
        filter: "blur(50px)",
        backgroundColor: "#fc0c13",
        borderRadius: "50%",
        pointerEvents: "none",
        translateX: "-50%",
        translateY: "-50%",
        zIndex: 9999
      }}
    />
  );
}
