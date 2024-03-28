import Youtube from "@/app/assets/youtube.png";
import LinkedIn from "@/app/assets/linkedin.png";
import Instagram from "@/app/assets/instagram.png";
import Facebook from "@/app/assets/facebook.png";
import Twitter from "@/app/assets/twitter.png";

import Image from "next/image";

const Footer = () => {
    return(
        <div className="flex justify-center font-gilroy mt-[200px]">
            <div className="m-[80px]">
                <p className="text-white font-gilroy_600">SUPPORT</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Submit Ticket</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">FAQs</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Help</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Knowledge</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Forum</p>
            </div>
            <div className="m-[80px]">
                <p className="text-white font-gilroy_600" >COMPANY</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">About Us</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Professional Team</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Newsroom</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Careers</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Partners</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Blog</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer">Contact Us</p>
            </div>
            <div className="m-[80px]">
                <p className="text-white font-gilroy_600">GET SPECIAL OFFER FROM US</p>
                <form className="flex mt-[15px]">
                    <input className="w-[250px] h-[40px] rounded p-[5px]" type="email" placeholder="Enter your email address"/>
                    <button className="ml-[5px] rounded bg-[#62cb5d] text-white w-[100px]">SUBMIT</button>
                </form>
                <p className="mt-[50px] text-slate-300 font-gilroy_600">FOLLOW US</p>
                <div className="flex">
                    <Image className="m-[5px]" width={32} height={32} src={Facebook} alt="Facebook" loading="lazy"/>
                    <Image className="m-[5px]" width={32} height={32} src={Twitter} alt="Twitter" loading="lazy"/>
                    <Image className="m-[5px]" width={32} height={32} src={Youtube} alt="Youtube" loading="lazy"/>
                    <Image className="m-[5px]" width={32} height={32} src={LinkedIn} alt="LinkedIn" loading="lazy"/>
                    <Image className="m-[5px]" width={32} height={32} src={Instagram} alt="Instagram" loading="lazy"/>
                </div>
            </div> 
        </div>
    )
}

export default Footer;