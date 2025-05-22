import { FC } from 'react';
import Image from 'next/image';
import { BANNER_IMAGES, BANNER_CONFIG } from './constants';

interface BannerProps {
    className?: string;
}

export const Banner: FC<BannerProps> = ({ className = '' }) => {
    return (
        <section
            className={`
                relative
                mx-auto
                max-w-[1440px]
                h-[760px]
                sm:h-[420px]
                md:h-[500px]
                lg:h-[580px]
                xl:h-[620px]
                2xl:h-[660px]
                flex flex-col sm:flex-row
                bg-banner-primary
                text-banner-text
                overflow-hidden
                pt-20
                ${className}
            `}
        >
            <div className="w-full h-full bg-banner-secondary relative">
                <Image
                    src={BANNER_IMAGES.first}
                    
                    fill
                    alt="Banner image 1"
                    className="w-full h-full transition-transform duration-300 hover:scale-105"
                    priority
                />
            </div>
            <div className="w-full h-full bg-banner-accent relative">
                <Image
                    fill
                    src={BANNER_IMAGES.second}
                    alt="Banner image 2"
                    className="w-full h-full transition-transform duration-300 hover:scale-105"
                />
            </div>
            {/* Overlay text and button */}
            <div className="absolute top-1/2 sm:left-1/2 flex flex-col sm:items-center items-start justify-start sm:justify-center sm:-translate-x-1/2 sm:-translate-y-1/2 mt-[20px] z-10 w-2/3 sm:w-1/2 px-1 sm:px-4 pt-10">
                <h1 className=" px-1 sm:px-6 py-2 sm:text-center text-2xl md:text-3 xl:text-4xl uppercase leading-tight tracking-wide text-[#212529] font-['EB_Garamond',serif] mb-4 sm:mb-8 shadow-lg">
                    СТАНЬТЕ ЧАСТИНОЮ<br className="hidden md:block" /> СТИЛЬНОГО РУХУ!
                </h1>
                <button className="bg-[#0A0B0C] text-[#F1F3F5] text-[14px] lg:text-[16px] font-medium uppercase rounded-[12px] px-3 sm:px-12 py-4 shadow-lg hover:bg-black transition">
                    Дивитись колекцію
                </button>
            </div>
        </section>
    );
};
