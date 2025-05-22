"use client";

import React, {JSX} from "react";
import x12 from "./1-2.svg";
import iconoirArrowUp from "./iconoir-arrow-up.svg";
import image from "./image.svg";
import socialMedia2 from "./social-media-2.svg";
import socialMedia from "./social-media.svg";
import Image from "next/image";

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full bg-white py-16">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <div className="flex justify-between w-full">
          <Image width={211} height={77} alt="Logo" src={x12} />

          <nav className="flex space-x-16">
            <ul className="space-y-2 text-sm font-medium text-dark">
              <li>КАТАЛОГ</li>
              <li>НОВИНКИ</li>
              <li>КАТЕГОРІЇ</li>
              <li>КОНТАКТИ</li>
            </ul>

            <ul className="space-y-2 text-sm font-medium text-dark">
              <li>ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ</li>
              <li>УМОВИ ВИКОРИСТАННЯ</li>
            </ul>
          </nav>

          <div className="w-[392px]">
            <h3 className="text-sm font-medium text-dark">
              БУДЬТЕ НА ЗВЯЗКУ
            </h3>
            <p className="text-sm text-[#1a1a18] opacity-70 mt-2">
              Підпишіться на новини про наші останні надходження, ексклюзивні
              акції та події
            </p>
            <div className="relative mt-3">
              <input
                type="email"
                placeholder="Введіть ваш e-mail"
                className="w-full p-4 border border-[#bfbfbf6b] rounded-[10px] text-sm text-[#1a1a18] opacity-60"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black p-3 rounded-lg">
                <Image width={16} height={16} alt="Submit" src={iconoirArrowUp} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full mt-10">
          <div>
            <p className="text-sm text-[#1a1a18]">+380 67 665 23 22</p>
            <p className="text-sm text-[#1a1a18]">madlen@gmail.com</p>
            <p className="text-sm text-[#1a1a18]">
              м. Київ, вул. Незалежності буд. 32
            </p>
          </div>

          <div className="flex space-x-2">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#1a1a18] rounded-lg"
            >
              <Image width={16} height={16} alt="Social Media" src={socialMedia} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#1a1a18] rounded-lg"
            >
              <Image width={16} height={16} alt="Social Media" src={socialMedia2} />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center bg-[#1a1a18] rounded-lg"
            >
              <Image width={16} height={16} alt="Social Media" src={image} />
            </a>
          </div>
        </div>

        <p className="text-xs text-[#5c5f64] mt-10">
          © 2025 All rights reserved.
        </p>
      </div>
    </footer>
  );
};
