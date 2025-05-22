"use client";

import React from "react";
import { AppBar } from "../AppBar/AppBar";
import { Card } from "../Card/Card";
import { SideMenu } from "../SideMenu/SideMenu";
import { TextField } from "../TextField/TextField";
import x12 from "./1-2.svg";
import evaArrowIosForwardOutline from "./eva-arrow-ios-forward-outline.svg";
import socialIcon from "./social-icon.svg";

export const ElementThankYouPage = (): JSX.Element => {
  return (
    <main className="bg-ligth100 flex justify-center w-full">
      <div className="w-full max-w-[1440px] min-h-[1696px] relative bg-ligth100">
        {/* AppBar */}
        <AppBar
          appbarVariant="default"
          className="!absolute !left-0 !top-0"
          elementClassName="!mr-[unset] !mb-[unset]"
          menuClassName="!ml-[unset]"
        />

        {/* Breadcrumbs */}
        <nav
          aria-label="breadcrumb"
          className="flex w-[1216px] items-center gap-2 absolute top-[147px] left-28"
        >
          <ol className="flex items-center gap-2">
            <li className="flex items-center gap-2 text-gray-60 text-sm">
              <span>Головна</span>
              <img src={evaArrowIosForwardOutline} alt="" className="w-6 h-6" />
            </li>
            <li className="flex items-center gap-2 text-gray-60 text-sm">
              <span>Кошик</span>
              <img src={evaArrowIosForwardOutline} alt="" className="w-6 h-6" />
            </li>
            <li className="text-gray-90 font-medium text-sm">
              Оформлення замовлення
            </li>
          </ol>
        </nav>

        {/* Order Confirmation */}
        <section className="flex flex-col w-[501px] items-center gap-4 absolute top-[233px] left-[470px] text-center">
          <h1 className="text-gray-100 text-[length:var(--1440-h2-font-size)] font-[number:var(--1440-h2-font-weight)] leading-[var(--1440-h2-line-height)] tracking-[var(--1440-h2-letter-spacing)]">
            ЗАМОВЛЕННЯ ОФОРМЛЕНО
          </h1>
          <p className="text-gray-90 text-[length:var(--1440-body-text-regular-font-size)] font-[number:var(--1440-body-text-regular-font-weight)] leading-[var(--1440-body-text-regular-line-height)] tracking-[var(--1440-body-text-regular-letter-spacing)]">
            № 1985658485
          </p>
        </section>

        {/* Order Details */}
        <section className="flex flex-col w-[701px] gap-8 absolute top-[361px] left-28">
          <div className="flex flex-col gap-5 p-6 border border-[#e9ecef] rounded-2xl">
            <h2 className="text-gray-100 text-[length:var(--1440-h4-font-size)] font-[number:var(--1440-h4-font-weight)] leading-[var(--1440-h4-line-height)] tracking-[var(--1440-h4-letter-spacing)]">
              Деталі замовлення
            </h2>

            <div className="flex flex-col gap-4">
              {/* Row 1 */}
              <div className="flex gap-4 border-b border-[#e9ecef] pb-4">
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-gray-90 text-sm font-medium">
                    ПІБ
                  </label>
                  <TextField
                    className="w-full"
                    text="Коваленко Олександ"
                    variant="standard"
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-gray-90 text-sm font-medium">
                    Метод доставки
                  </label>
                  <div className="bg-gray-0 rounded-sm py-2.5 px-0">
                    <span className="text-gray-90 text-sm">
                      Адресна доставка
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-4 border-b border-[#e9ecef] pb-4">
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-gray-90 text-sm font-medium">
                    E-mail
                  </label>
                  <TextField
                    className="w-full"
                    text="Ваш e-mail"
                    variant="standard"
                  />
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-gray-90 text-sm font-medium">
                    Адреса
                  </label>
                  <div className="bg-gray-0 rounded-sm py-2.5 px-0">
                    <span className="text-gray-90 text-sm">
                      Вулиця, будинок, квартира, під&apos;їзд
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-gray-90 text-sm font-medium">
                    Метод оплати
                  </label>
                  <div className="bg-gray-0 rounded-sm py-2.5 px-0">
                    <span className="text-gray-90 text-sm">Оплата онлайн</span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 gap-2">
                  <label className="text-gray-90 text-sm font-medium">
                    Номер телефону
                  </label>
                  <TextField
                    className="w-full"
                    text="Ваш номер"
                    variant="standard"
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-90 text-sm">
            Чекайте на дзвінок від нашого менеджера
          </p>
        </section>

        {/* Order Summary Card */}
        <Card
          cardVariant="default"
          className="!absolute !left-[833px] !top-[347px]"
        />

        {/* Footer */}
        <footer className="absolute w-full h-[371px] top-[1325px] left-0">
          <div className="relative w-[1216px] h-[231px] top-[70px] left-28">
            <div className="absolute top-[107px] left-0 flex flex-col gap-4">
              <address className="not-italic flex flex-col gap-2 text-gray-90 text-sm">
                <p>+380 67 665 23 22</p>
                <p>madlen@gmail.com</p>
                <p>м. Київ, вул. Незалежності буд. 32</p>
              </address>
              <img src={socialIcon} alt="Social media icons" />
            </div>

            <div className="absolute top-[33px] left-[311px] flex flex-col items-end gap-[39px] w-[905px]">
              <SideMenu className="w-full" sidemenuVariant="default" />
              <p className="text-gray-60 text-xs text-right">
                © 2025 All rights reserved.
              </p>
            </div>

            <img
              className="absolute w-[185px] h-[68px] top-0 left-0"
              alt="Logo"
              src={x12}
            />
          </div>
        </footer>
      </div>
    </main>
  );
};
