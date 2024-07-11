import { Input } from "@/app/components/loginPage/input1";
import { InputRememberMe } from "@/app/components/loginPage/inputBoxRememberMe";
import { IntroPage } from "@/app/components/loginPage/introPage";
import { ForgotPass } from "./components/loginPage/forgotpass";
import { Button } from "./components/loginPage/btn";
import { Background } from "./components/loginPage/background";

export default function Home() {
  return (

    <div className=" flex justify-center items-center w-screen h-screen bg-white z-1">

      <Background/>

      <div className="flex flex-col gap-8">
        <IntroPage />
        <Input type="email" placeholder={`example@gmail.com`} />
        <Input type="password" placeholder={"*********"} />

        <div>
          <InputRememberMe/>
          <ForgotPass/>
          <Button/>
        </div>

      </div>
  
    </div>
  );
}
