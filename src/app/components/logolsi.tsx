import Image from "next/image";
import SvgLogolsi from '@/assets/introPage/logolsi.svg';

export const Logolsi = () => {
    return(

        <div
        className="absolute right-2 bottom-2">


            <Image
            className="w-24 md:w-44"
            src={SvgLogolsi} 
            alt={"Logo do LS&I"}/>

        </div>
    )
}