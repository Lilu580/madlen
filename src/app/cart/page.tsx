"use client";

import React, { JSX } from "react";
import { Button } from "../../components/sections/Button/Button";
import x122 from "./1-2-2.svg";
import x12 from "./1-2.svg";
import evaArrowIosForwardOutline from "./eva-arrow-ios-forward-outline.svg";
import fluentDelete32Light from "./fluent-delete-32-light.svg";
import iconoirArrowUp2 from "./iconoir-arrow-up-2.svg";
import iconoirArrowUp from "./iconoir-arrow-up.svg";
import icons from "./icons.svg";
import image1 from "./image.png";
import image from "./image.svg";
import line10 from "./line-10.svg";
import socialIcon from "./social-icon.svg";

export default function Page (): JSX.Element  {
  const cartItems = Array(5).fill({
    name: "Назва товару",
    sku: "FB7910-600",
    color: "Коричневий",
    quantity: 50,
    price: "1 200,00 ₴",
    image: image1,
  });

  return (
    <main className="bg-ligth100 flex justify-center w-full">
      <div className="relative w-[1440px] h-[1405px] bg-ligth100 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between px-28 py-6 absolute top-0 left-0 w-full bg-ligth100 rounded-b-[32px]">
          <img src={x12} alt="Logo" className="w-[185px] h-[67px]" />
          <nav className="flex items-center justify-between w-[794px]">
            <ul className="flex gap-9 text-gray-100 font-1440-body-text-regular">
              <li>Каталог</li>
              <li>Новинки</li>
              <li>Категорії</li>
              <li>Контакти</li>
            </ul>
            <div className="relative w-[136px] h-8">
              <img
                src={icons}
                alt="Icons"
                className="absolute top-2 left-0 w-[136px] h-6"
              />
              <div className="absolute top-0 left-[72px] w-5 h-5 bg-gray-100 rounded-[10px] flex items-center justify-center text-ligth100 text-[11px]">
                5
              </div>
            </div>
          </nav>
        </header>

        {/* Breadcrumb */}
        <nav className="absolute top-[147px] left-28 flex items-center gap-2 w-[1216px]">
          <div className="flex items-center gap-2 text-gray-60 font-1440-body-text-3-regular">
            <span>Головна</span>
            <img
              src={evaArrowIosForwardOutline}
              alt="Arrow"
              className="w-6 h-6"
            />
          </div>
          <span className="text-gray-90 font-1440-body-text-3-medium">
            Кошик
          </span>
        </nav>

        {/* Title */}
        <h1 className="absolute top-[232px] left-28 text-gray-100 font-1440-h2">
          КОШИК
        </h1>

        {/* Cart Items */}
        <section className="absolute top-[306px] left-28 flex flex-col gap-4 w-[804px] px-4 py-6 border border-[#e9ecef] rounded-2xl">
          {cartItems.map((item, index) => (
            <React.Fragment key={index}>
              <article className="flex items-center gap-2.5 w-full">
                <div className="w-[109px] h-[98px] p-1 bg-neutral-color00 rounded-xl shadow-[0px_4px_28px_-2px_#00000014]">
                  <div className="w-full h-full bg-ligth100 rounded-[10px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[101px] h-[90px]"
                    />
                  </div>
                </div>
                <div className="flex justify-between flex-1">
                  <div className="flex flex-col justify-between h-[54px]">
                    <h2 className="text-gray-100 font-1440-body-text-medium">
                      {item.name}
                    </h2>
                    <p className="text-gray-60 font-1440-body-text-3-regular">
                      Артикул: {item.sku}
                    </p>
                  </div>
                  <div className="flex items-center justify-between w-[455px] h-[70px] pr-2">
                    <div className="flex flex-col items-center gap-[19px]">
                      <span className="text-[#495057] font-1440-body-text-2-regular">
                        Колір
                      </span>
                      <span className="text-gray-90 font-1440-body-text-2-medium">
                        {item.color}
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-between h-[70px]">
                      <span className="text-[#495057] font-1440-body-text-2-regular">
                        Кількість
                      </span>
                      <div className="flex items-center gap-[9px]">
                        <img
                          src={iconoirArrowUp2}
                          alt="Decrease"
                          className="w-7 h-7"
                        />
                        <div className="w-[62px] h-[37px] bg-gray-90 rounded flex items-center justify-center text-ligth100 font-1440-body-text-2-medium">
                          {item.quantity}
                        </div>
                        <img
                          src={iconoirArrowUp}
                          alt="Increase"
                          className="w-7 h-7"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-[19px] w-[86px]">
                      <span className="text-[#495057] font-1440-body-text-2-regular">
                        Ціна
                      </span>
                      <span className="text-gray-90 font-1440-body-text-medium text-right">
                        {item.price}
                      </span>
                    </div>
                    <img
                      src={fluentDelete32Light}
                      alt="Delete"
                      className="w-4 h-4"
                    />
                  </div>
                </div>
              </article>
              {index < cartItems.length - 1 && (
                <img
                  src={line10}
                  alt="Divider"
                  className="w-full h-px object-cover"
                />
              )}
            </React.Fragment>
          ))}
        </section>

        {/* Order Summary */}
        <aside className="absolute top-[306px] left-[936px] w-[392px] px-4 py-6 border border-[#e9ecef] rounded-2xl flex flex-col gap-8">
          <div className="w-full px-2 py-0 rounded-2xl shadow-[0px_2px_6px_#00000014] flex flex-col items-center gap-[33px]">
            <h2 className="text-gray-100 font-1440-h3 text-center">
              ЗАМОВЛЕННЯ
            </h2>
            <div className="w-full flex flex-col gap-5">
              <div className="flex justify-between">
                <span className="text-[#495057] font-1440-body-text-regular">
                  Проміжковий підсумок:
                </span>
                <span className="text-gray-90 font-1440-body-text-regular">
                  6 000,00 ₴
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#495057] font-1440-body-text-regular">
                  Знижка:
                </span>
                <span className="text-gray-90 font-1440-body-text-regular">
                  0,00 ₴
                </span>
              </div>
              <div className="border-t border-[#e9ecef] pt-3.5">
                <div className="flex justify-between">
                  <span className="text-gray-90 font-1440-h4">Загалом:</span>
                  <span className="text-gray-100 font-1440-h4">6 000,00 ₴</span>
                </div>
              </div>
            </div>
          </div>
          <Button property1="default" />
        </aside>

        {/* Footer */}
        <footer className="absolute bottom-0 left-0 w-full h-[371px]">
          <div className="relative w-[1216px] h-[231px] top-[70px] left-28">
            <div className="absolute top-[107px] left-0 flex flex-col gap-4">
              <address className="not-italic flex flex-col gap-2 text-gray-90 font-1440-body-text-3-regular">
                <p>+380 67 665 23 22</p>
                <p>madlen@gmail.com</p>
                <p>м. Київ, вул. Незалежності буд. 32</p>
              </address>
              <img src={socialIcon} alt="Social icon" />
            </div>
            <div className="absolute top-[33px] left-[311px] flex flex-col items-end gap-[39px] w-[905px]">
              <div className="flex justify-between w-full">
                <ul className="flex flex-col gap-2.5 text-gray-100 font-1440-body-text-3-regular">
                  <li>Каталог</li>
                  <li>Новинки</li>
                  <li>Категорії</li>
                  <li>Контакти</li>
                </ul>
                <ul className="flex flex-col gap-2.5 text-gray-100 font-1440-body-text-3-regular">
                  <li>Політика конфіденційності</li>
                  <li>Умови використання</li>
                </ul>
                <div className="flex flex-col gap-[18px] w-[392px]">
                  <h3 className="text-gray-100 font-1440-body-text-3-regular">
                    БУДЬТЕ НА ЗВ'ЯЗКУ
                  </h3>
                  <p className="text-[#495057] font-1440-body-text-3-regular">
                    Підпишіться на новини про наші останні надходження,
                    ексклюзивні акції та події
                  </p>
                  <div className="relative w-[392px] flex items-center">
                    <input
                      type="email"
                      placeholder="Введіть ваш e-mail"
                      className="w-full p-4 border border-[#ced4da] rounded-[10px] text-gray-60 font-1440-body-text-3-regular"
                    />
                    <img
                      src={image}
                      alt="Submit"
                      className="absolute right-0 w-[52px] h-[52px]"
                    />
                  </div>
                </div>
              </div>
              <p className="text-gray-60 font-1440-small-text-regular text-right w-full">
                © 2025 All rights reserved.
              </p>
            </div>
            <img
              src={x122}
              alt="Logo"
              className="absolute top-0 left-0 w-[185px] h-[68px]"
            />
          </div>
        </footer>
      </div>
    </main>
  );
};
