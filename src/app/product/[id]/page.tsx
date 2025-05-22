"use client";

import React, { JSX } from "react";
import { Button } from "../../../components/sections/Button/Button";
import evaArrowIosForwardOutline from "./eva-arrow-ios-forward-outline.svg";
import image2 from "./image-2.png";
import image from "./image.png";

import Image from "next/image";

export default function Element(): JSX.Element {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[2208px] relative">
        {/* Breadcrumbs */}
        <nav className="flex w-[1216px] items-center gap-2 absolute top-[147px] left-28 text-gray-60 text-sm">
          <a href="#">Головна</a>
          <Image
            className="w-6 h-6"
            alt="Arrow"
            src={evaArrowIosForwardOutline}
          />
          <a href="#">Каталог</a>
          <Image
            className="w-6 h-6"
            alt="Arrow"
            src={evaArrowIosForwardOutline}
          />
          <a href="#">Костюми</a>
          <Image
            className="w-6 h-6"
            alt="Arrow"
            src={evaArrowIosForwardOutline}
          />
          <span className="text-gray-90 font-medium">Назва товару</span>
        </nav>

        {/* Product Section */}
        <section className="flex w-[1216px] gap-5 absolute top-[233px] left-28">
          {/* Product Images */}
          <div className="flex w-[598px] gap-2">
            <div className="flex flex-col gap-2">
              <Image className="w-full h-[108px]" alt="Thumbnail" src={image} />
              <Image className="w-full h-[108px]" alt="Thumbnail" src={image2} />
              <Image className="w-full h-[108px]" alt="Thumbnail" src={image2} />
              <Image className="w-full h-[108px]" alt="Thumbnail" src={image2} />
            </div>
            <Image className="w-[495px]" alt="Main Image" src={image2} />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-8">
              <h1 className="text-gray-100 text-2xl">Назва товару</h1>
              <p className="text-gray-60 text-sm">Артикул №245456</p>
              <div className="flex items-center gap-4">
                <span className="text-gray-100 text-xl">1 200,00 ₴</span>
                <span className="text-gray-50 text-lg line-through">
                  1 500,00 ₴
                </span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full">
                  -10%
                </span>
              </div>
              <Button property1="default" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
