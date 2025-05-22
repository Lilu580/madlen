"use client";

import React from "react";

import Image, { StaticImageData } from "next/image";

export const CategoryCard = ({
  title,
  image,
  width,
}: { title: string; image: StaticImageData; width: string }) => (
  <div
    className={`flex flex-col ${width} h-[350px] items-start gap-2.5 p-2 bg-white rounded-3xl overflow-hidden shadow-[0px_4px_28px_#59595914]`}
  >
    <div className="relative flex-1 w-full h-full">
      <Image
        className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
        alt={title}
        src={image}
      />
      <h3 className="absolute top-4 left-4 text-[#1a1a18] text-2xl font-medium [font-family:'EB_Garamond-Medium',Helvetica]">
        {title}
      </h3>
    </div>
  </div>
);