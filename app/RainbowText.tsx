"use client";
import React, { useEffect } from "react";

export const RainbowText = ({ text }: { text: string }) => {
  // Split text into an array of characters
  const characters = text.split("");

  const [colors, setColors] = React.useState<string[]>([
    // Array of rainbow colors
    "text-red-400",
    "text-orange-400",
    "text-yellow-400",
    "text-green-400",
    "text-blue-400",
    "text-indigo-400",
    "text-violet-400",
  ]);

  useEffect(() => {
    setInterval(() => {
      // Rotate the colors
      setColors((colors) => [colors.slice(-1)[0], ...colors.slice(0, -1)]);
    }, 100);
  }, []);

  return (
    <div>
      <a href="https://partiful.com/e/Jj0kUGKRbLoutRkHCFQ7">
        {characters.map((char, index) => (
          <span key={index} className={colors[index % colors.length]}>
            {char}
          </span>
        ))}
      </a>
    </div>
  );
};
