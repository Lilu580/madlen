"use client";

import React, { JSX } from "react";
import { Button } from "../Button/Button";
import image from "./image.png";
import property1Default from "./property-1-default.svg";
import Image from "next/image";

const products = Array(5).fill({
  name: "Назва товару",
  price: "1 000,00 грн",
  oldPrice: "1 000,00 грн",
  imageSrc: image,
  frameSrc: property1Default,
});


export const Products = (): JSX.Element => {
  return (
    <section className="flex flex-col w-[1216px] items-start gap-[50px] relative mx-auto">
      <header className="flex items-center justify-between w-full">
        <h2 className="font-1440-h2 text-gray-100">НОВИНКИ</h2>
        <Button content="Переглянути все" />
      </header>

      <div className="flex items-center gap-5 w-full">
        {products.map((product, index) => (
          <article
            key={index}
            className="flex flex-col w-[227px] items-center justify-center gap-2 p-2 bg-bg-100 rounded-xl shadow-md"
          >
            <div className="w-full h-[264px] bg-white rounded-[10px] overflow-hidden flex justify-center items-center">
              <Image
                width={211}
                height={264}
                className="w-[211px] h-[264px]"
                alt={product.name}
                src={product.imageSrc}
              />
            </div>

            <div className="flex w-[211px] items-end justify-between">
              <div className="flex flex-col w-[163px] items-start gap-4 pl-2 py-2">
                <h3 className="text-gray-90 font-1440-body-text-2-medium">
                  {product.name}
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-gray-100 font-1440-body-text-3-medium">
                    {product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-gray-60 text-sm line-through">
                      {product.oldPrice}
                    </span>
                  )}
                </div>
              </div>
              <Image width={40} height={40} alt="Frame" src={product.frameSrc} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};