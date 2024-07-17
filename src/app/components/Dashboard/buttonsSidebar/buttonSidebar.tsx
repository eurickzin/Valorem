import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface StylesButton {
  content: string;
  src: StaticImageData; // Mudança de string para StaticImageData
  alt: string;
}

export const ButtonSidebar = ({ content, src, alt }: StylesButton) => (
  <button className="text-[#0D4DA1] border font-semibold text-base md:w-[270px] md:h-[50px] transparent-background mb-[25px]">
    <div className="flex items-center justify-start">
      <Image src={src} alt={alt} width={24} height={24} />
      <span className="ml-2">{content}</span>
    </div>
  </button>
);
