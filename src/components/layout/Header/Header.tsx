"use client";

import React, {JSX, useState} from "react";
import Image from "next/image";
import { Input } from "@/components/ui/Input";

export const Header = (): JSX.Element => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const menu = [
    {title: "Каталог", href: '/catalog'}, {title: "Новинки"}, {title: "Категорії"}, {title: "Контакти"}
  ]
  return (
    <>
    <div></div>
      <header className="fixed top-0 left-0 right-0 mx-auto max-w-[1440px] bg-ligth100 rounded-b-[32px] z-50">
        <div className="relative max-w-[1440px] h-[116px] flex items-center justify-between px-4 md:px-20 xl:px-28 mx-auto ">
            <div className={`flex md:mr-4 ${isSearchOpen && 'hidden md:block'}`}>
              <Image alt="menu" src='/Burger.svg' width={24} height={24} className="block md:hidden mr-3"/> 
              <Image alt="Madlen Logo" src='/Logo.svg' width={185} height={67}/>
            </div>

          {
            !isSearchOpen && (
              <nav className="hidden md:flex md:gap-4 lg:gap-9 md:mr-4">
            {menu.map((item) => (
              <a
                key={item.title}
                href={`${item.href}`}
                className="text-lg font-normal text-dark font-['EB_Garamond-Regular']"
              >
                {item.title}
              </a>
            ))}
          </nav>
            )
          }
                    
          <div className={`${isSearchOpen && 'w-full md:w-auto'} flex items-center gap-4 lg:gap-6`}>
            <div className={`relative flex mr-[-8px] ${isSearchOpen ? 'w-full md:w-96': ''}`}>
                <div className={`${isSearchOpen ? 'block' : 'hidden'} w-full`}>
                  <Input placeholder="Пошук"/>
                </div>

                <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
                  <Image alt="search" src='/Search.svg' width={24} height={24} className={`${isSearchOpen ? 'absolute right-[8px] translate-y-[-50%] top-[50%]' : 'mr-2'}`}/>
                </button>
            </div>
            <div className={`relative min-w-6 min-h-6 ${isSearchOpen && 'hidden md:block'}`}>
              <div className="relative flex items-center justify-center">
                <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-white text-[11px] font-normal leading-6 bg-gray100 rounded-full translate-y-[-50%] translate-x-[50%]">
                  5
                </span>
              </div>
              <Image alt="search" src='/Badge.svg' width={24} height={24} />
            </div>
            <Image alt="search" src='/Person.svg' width={24} height={24} className={`${isSearchOpen && 'hidden md:block'}`}/>
          </div>
        </div>
      </header>
    </>
  
  );
};
