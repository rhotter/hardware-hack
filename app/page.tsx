import Image from "next/image";

import React from "react";
import { RainbowText } from "./RainbowText";

export default function Home() {
  return (
    <main className="p-8 md:p-24">
      <div className="max-w-5xl w-full justify-between font-mono text-sm flex flex-col gap-4">
        <Image
          src="/hack.png"
          width={400}
          height={155}
          alt="Hack picture"
          className="pb-8"
        />
        <div className="font-bold">hardware hack</div>
        build things together the whole day, leading up to demos at night.
        <div className="text-gray-500 py-4">
          <ul className="">
            <li>
              <span className="font-bold">when?</span> sunday, december 10 at 10
              am. demos at 7:30 pm.
            </li>
            <li>
              <span className="font-bold">where?</span>{" "}
              <a href="https://lxm.house" className="underline">
                lxm.house
              </a>{" "}
              (182 thorndike, cambridge, ma)
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
