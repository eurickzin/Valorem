import { Input } from "@/app/components/loginPage/input1";
import { InputRememberMe } from "@/app/components/loginPage/inputBoxRememberMe";
import { IntroPage } from "@/app/components/loginPage/introPage";
import { ForgotPass } from "./components/loginPage/forgotpass";
import { Button } from "./components/loginPage/btn";
import { Background } from "./components/loginPage/background";
import { Logolsi } from "./components/logolsi";

export default function Home() {
  return (

    <div className=" flex justify-center items-center w-screen h-screen bg-white z-1">

      

      <div className="flex flex-col gap-8">

        {/* <Background/> */}
        <IntroPage />
        <Input type="email" placeholder={`example@gmail.com`} />
        <Input type="password" placeholder={"*********"} />

        <div>
          <InputRememberMe />
          <ForgotPass />
          <Button />
        </div>

      </div>

      <Logolsi />

    </div>
  );
}
