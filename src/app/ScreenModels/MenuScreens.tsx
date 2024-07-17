import React from 'react';
import { Profile } from './Profile';

interface NameScreen {
    name: string;
    description: string;
}

export const MenuScreens: React.FC<NameScreen> = ({ name, description }) => {
    return (
        <div className="flex justify-between items-center w-full h-[150px] border-b border-[#CACACA] pt-10 px-10">
            <div className='flex flex-col gap-2.5'>
                <h1 className="text-[#0D4DA1] text-5xl font-bold">
                    {name}
                </h1>
                <p className="text-[#828282]">
                    {description}
                </p>
            </div>

            <Profile/>
        </div>
    );
};
