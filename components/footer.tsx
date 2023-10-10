import React from "react";
import Image from "next/image";
import LuffyHat from "@/public/luffy-hat.png";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 ">
      <Image
        src={LuffyHat}
        alt="The Hat of Monkey D. Luffy from One Piece"
        width={75}
        height={75}
        quality={100}
        className="mx-auto mt-4 mb-1 items-center object-cover"
      />
      <small className="mb-2 text-xs block">
        &copy; 2023 Edlando Eliacin, All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> Built with
        React, Next.js, TailwindCSS, Typescript and Framer Motion.
      </p>
    </footer>
  );
}
