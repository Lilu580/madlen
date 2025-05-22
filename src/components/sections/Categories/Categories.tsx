"use client";

import React, { JSX } from "react";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image from "./image.png";
import { CategoryCard } from "../CategoryCard/CategoryCard";

const categories = [
  { title: "Сукні", image: image3, width: "w-[495px]" },
  { title: "Костюми", image: image2, width: "w-[701px]" },
  { title: "Аксесуари", image: image4, width: "w-[701px]" },
  { title: "Куртки", image: image, width: "w-[495px]" },
];


export const Categories = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-10 px-28 py-[70px] bg-ligth100">
      <h2 className="text-[#1a1a18] text-4xl font-medium text-center w-full [font-family:'EB_Garamond-Medium',Helvetica] block">
        КАТЕГОРІЇ
      </h2>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-5">
          <CategoryCard {...categories[0]} />
          <CategoryCard {...categories[1]} />
        </div>
        <div className="flex gap-5">
          <CategoryCard {...categories[2]} />
          <CategoryCard {...categories[3]} />
        </div>
      </div>
    </section>
  );
};
