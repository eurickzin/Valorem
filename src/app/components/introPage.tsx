import logoValorem from '@/assets/introPage/logo1.png'
import Image from 'next/image'

export const IntroPage = () => {
    return(
        <div className='flex flex-col items-center gap-4'>
           <Image src={logoValorem} alt={"Logo do valorem"}/>

           <h1 className='text-[#0D4DA1] text-5xl'
           >Entrar</h1>

        </div>
    )
}