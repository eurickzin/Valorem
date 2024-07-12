import Image from "next/image"
import logoValorem from '@/assets/introPage/logoValorem.png'

export const IntroPage = () => {
    return(
        <div className='flex flex-col items-center gap-4'>
            <Image className="w-36 md:w-52" src={logoValorem} alt='Logo Valorem'/>

           <h1 className='text-[#0D4DA1] text-5xl'
           >Entrar</h1>

        </div>
    )
}