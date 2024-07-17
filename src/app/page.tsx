// pages/index.js
import { Input } from "@/app/components/loginPage/input1";
import { InputRememberMe } from "@/app/components/loginPage/inputBoxRememberMe";
import { IntroPage } from "@/app/components/loginPage/introPage";
import { ForgotPass } from "./components/loginPage/forgotpass";
import { Button } from "./components/loginPage/btn";
import { Background } from "./components/loginPage/background";
import { Logolsi } from "./components/logolsi";
import { useState } from "react";
import Dashboard from "./dashboard";

export default function Home() {

  return (
    <div>

      <Dashboard />
      <div className="flex justify-center items-center w-full h-full bg-white absolute overflow-hidden">


        <Background />

        <div className="flex flex-col gap-8 z-10">

          <IntroPage />
          <Input type="email" placeholder={`example@gmail.com`} />
          <Input type={"password"} placeholder={"••••••••"} />

          <div>
            <InputRememberMe />
            <ForgotPass />
            <Button />
          </div>
        </div>

        <Logolsi />
      </div>

    </div>

  );
}
