'use client';
import Logo from "@/app/assets/logo.png";
import Search from "@/app/assets/search.png";
import Globe from "@/app/assets/www.png";
import LoginArrow from "@/app/assets/login_arrow.png";

import Image from "next/image";

const Header = () => {
    return(
        <div className="flex justify-center font-gilroy mt-[50px] max-[500px]:grid">
            <Image className="flex mt-[15px] max-[500px]:ml-auto max-[500px]:mr-auto" width={100} src={Logo} alt="logo" loading="lazy"/>
            <div className="flex w-[300px] h-[30px] bg-black border-2 border-[#62cb5d] rounded-xl m-[5px] mt-[50px] ml-[250px] max-[980px]:hidden">
                <Image className="m-[5px]" src={Search} alt="Search" width={16} height={16} loading="lazy"/>
                <input className="bg-black text-white w-[260px] text-[14px] active:no-underline max-[980px]:hidden" type="text" />
                <Image className="m-[5px]" src={Globe} alt="Globe" width={16} height={16} loading="lazy"/>
            </div>
            <div className="mt-[35px] flex ml-[150px] font-gilroy_600 max-[500px]:ml-auto">
                <div className="flex" onClick={(() => location.href = 'https://www.productgem.co/sign-in')}>
                    <Image width={32} height={32} className="w-[32px] h-[32px] mt-[14px]" src={LoginArrow} alt="Login Arrow" loading="lazy"/>
                    <button className="text-white h-[35px] m-[12px]">Login</button>
                </div>
                <button className="bg-[#62cb5d] h-[45px] w-[125px] text-white rounded-2xl m-[5px] ml-[25px]" onClick={(() => location.href = 'https://www.productgem.co/sign-up')}>Sign Up</button>
            </div>
        </div>
    )
}

export default Header;