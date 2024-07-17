import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface StylesButton {
  content: string;
  src: StaticImageData;
}

export const ButtonSidebar = ({ content, src }: StylesButton) => (

  <button className="text-[#0D4DA1] font-semibold text-base md:w-[270px] md:h-[50px] transparent-background mb-[25px] flex items-center px-2">

    <div className="flex items-center justify-start border-[#0D4DA1] border-r-2 px-3">

      <Image src={src} width={24} height={24} alt={'icon'} />

    </div>

    <div className='ml-3'>

      <span className="ml-2">{content}</span>

    </div>

  </button>
);
