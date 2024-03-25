import Logo from "@/app/assets/logo.png";
import Search from "@/app/assets/search.png";
import Globe from "@/app/assets/www.png";

import Image from "next/image";
//#32DF1F
const Header = () => {
    return(
        <div className="flex justify-center font-gilroy">
            <Image className="flex mt-[15px]" width={100} src={Logo} alt="logo" loading="lazy"/>
            <div className="flex w-[300px] h-[30px] bg-black border-2 border-green-500 rounded-xl m-[5px] mt-[50px] ml-[250px]">
                <Image className="m-[5px]" src={Search} alt="Search" width={16} height={16} loading="lazy"/>
                <input className="bg-black text-white w-[260px] text-[14px] active:no-underline" type="text" />
                <Image className="m-[5px]" src={Globe} alt="Globe" width={16} height={16} loading="lazy"/>
            </div>
            <div className="mt-[43px] flex ml-[150px] font-gilroy_600">
                <button className="text-white h-[35px] m-[5px]">Login</button>
                <button className="bg-green-500 h-[35px] w-[125px] text-white rounded-2xl m-[5px] ml-[25px]">Sign Up</button>
            </div>
        </div>
    )
}

export default Header;