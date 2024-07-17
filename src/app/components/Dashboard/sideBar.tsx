import Image from "next/image"
import logoValorem from '@/assets/introPage/logoValorem.png';
import Logolsi from '@/assets/introPage/logolsi.svg'
import { ButtonSidebar } from "./buttonsSidebar/buttonSidebar";
import DashboardIcon from '@/assets/iconsSidebar/nao selecionados/dashboardselect.png'
import ComponentsIcon from '@/assets/iconsSidebar/nao selecionados/componentes.png'
import MaodeObraIcon from '@/assets/iconsSidebar/nao selecionados/maodeobra.png'
import OrcamentosIcon from '@/assets/iconsSidebar/nao selecionados/orcamentos.png'
import ProjetosIcon from '@/assets/iconsSidebar/nao selecionados/projetos.png'
import ConfigIcon from '@/assets/iconsSidebar/nao selecionados/configs.png'

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
                    <ButtonSidebar src={DashboardIcon} content={"Dashboard"} />
                    <ButtonSidebar src={''} content={"Componentes"} />
                    <ButtonSidebar src={''} content={"Mão de obra"} />
                    <ButtonSidebar src={''} content={"Orçamentos"} />
                    <ButtonSidebar src={''} content={"Projetos"} />
                    <ButtonSidebar src={''} content={"Configurações"} />
                </div>
            </div>

            <Image
            className="md:w-[150px]"
            src={Logolsi}
            alt={"Logo do Lsi"} />


        </div>
    )
}