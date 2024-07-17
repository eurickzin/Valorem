import Image from "next/image";
import PhotoProfile from '@/assets/profile/photoProfile.jpg';
import IconLogOut from '@/assets/profile/icons/logOut.svg'

export const Profile = () =>{
    return(
        <div className="flex items-center">

            <h1 
            className="text-black font-semibold text-base flex items-center mr-5">
                Luis Henrique
            </h1>

            <Image className="w-[70px] h-[70px] rounded-full" src={PhotoProfile} alt=""/>

            
            <Image className="ml-6" src={IconLogOut} alt=""/>

        </div>
    )
}