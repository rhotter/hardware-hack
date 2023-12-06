"use client";

import Image from "next/image";

import React, { useEffect } from "react";

const RainbowText = ({ text }: { text: string }) => {
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
      <a href="#">
        {characters.map((char, index) => (
          <span key={index} className={colors[index % colors.length]}>
            {char}
          </span>
        ))}
      </a>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-24">
      <div className="max-w-5xl w-full justify-between font-mono text-sm flex flex-col gap-4">
        <Image
          src="/hack.png"
          width={400}
          height={600}
          alt="Hack picture"
          className="pb-8"
        />
        <div className="font-bold">hardware hack</div>
        build things together the whole day, leading up to demos at night.
        <div className="text-gray-500 py-4">
          <ul className="">
            <li>
              <span className="font-bold">when?</span> sunday, december 10 at 10
              am. demos at 9 pm.
            </li>
            <li>
              <span className="font-bold">where?</span>{" "}
              <a href="https://lxm.house" className="underline">
                lxm.house
              </a>{" "}
              (182 thorndike, cambridge ma)
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <RainbowText text="-> rsvp" />
        </div>
      </div>
    </main>
  );
}
