import React from "react";
import { SideBar } from "./components/Dashboard/sideBar";
import { ScreenDashboard } from "./ScreenModels/screenDashboard";

export default function Dashboard() {
    return (
        <div 
        className="bg-[#D9D9D9] w-full h-screen flex">

            <SideBar/>
            <ScreenDashboard/>
            
        </div>
    );
}


