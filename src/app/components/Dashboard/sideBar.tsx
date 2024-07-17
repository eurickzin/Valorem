import Image from "next/image"
import logoValorem from '@/assets/introPage/logoValorem.png';
import Logolsi from '@/assets/introPage/logolsi.svg'
import { ButtonSidebar } from "./buttonsSidebar/buttonSidebar";

import IconDashboard from '@/assets/iconsSidebar/nao selecionados/dashboard.svg';
import IconComponents from '@/assets/iconsSidebar/nao selecionados/components.svg';
import IconMaoDeObra from '@/assets/iconsSidebar/nao selecionados/maodeobra.svg';
import IconOrcamentos from '@/assets/iconsSidebar/nao selecionados/orçamentos.svg';
import IconProjetos from '@/assets/iconsSidebar/nao selecionados/projetos.svg';
import IconConfig from '@/assets/iconsSidebar/nao selecionados/config.svg';





export const SideBar = () => {
    return (
        <div className="bg-white w-1/4 lg:w-[344px] flex flex-col justify-between items-center md:pb-[60px] ">

            <div>
                <div className="flex items-center gap-2 h-[150px] border-b border-b-[#CACACA] p-4">

                    <Image
                        className="w-16 md:w-24"
                        src={logoValorem}
                        alt={"Logo do valorem"} />

                    <div className="w-full">
                        <h1
                            className="text-[#0D4DA1] text-2xl font-bold"
                        >Valorem</h1>

                        <p
                            className="text-black text-xs font-bold"
                        >Soldagem Precisa, Custos Sob Controle!</p>
                    </div>

                </div>

                <div className="flex flex-col items-center pt-8">
                    <ButtonSidebar src={IconDashboard} content={"Dashboard"} />
                    <ButtonSidebar src={IconComponents} content={"Componentes"} />
                    <ButtonSidebar src={IconMaoDeObra} content={"Mão de obra"} />
                    <ButtonSidebar src={IconOrcamentos} content={"Orçamentos"} />
                    <ButtonSidebar src={IconProjetos} content={"Projetos"} />
                    <ButtonSidebar src={IconConfig} content={"Configurações"} />
                </div>
            </div>

            <Image
            className="md:w-[150px]"
            src={Logolsi}
            alt={"Logo do Lsi"} />


        </div>
    )
}