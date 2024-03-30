import Youtube from "@/app/assets/youtube.png";
import LinkedIn from "@/app/assets/linkedin.png";
import Instagram from "@/app/assets/instagram.png";
import Facebook from "@/app/assets/facebook.png";
import Twitter from "@/app/assets/twitter.png";

import Image from "next/image";

const Footer = () => {
    return(
        <div className="flex justify-center font-gilroy mt-[200px] max-[870px]:grid">
            <div className="m-[80px]">
                <p className="text-white font-gilroy_600 max-[350px]:text-center">SUPPORT</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Submit Ticket</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">FAQs</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Help</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Knowledge</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Forum</p>
            </div>
            <div className="m-[80px]">
                <p className="text-white font-gilroy_600 max-[350px]:text-center">COMPANY</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">About Us</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Professional Team</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Newsroom</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Careers</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Partners</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Blog</p>
                <p className="text-slate-300 mt-[15px] hover:cursor-pointer max-[350px]:text-center">Contact Us</p>
            </div>
            <div className="m-[80px]">
                <p className="text-white font-gilroy_600 max-[350px]:text-center">GET SPECIAL OFFER FROM US</p>
                <form className="flex mt-[15px] max-[350px]:grid">
                    <input className="w-[250px] h-[40px] rounded p-[5px]" type="email" placeholder="Enter your email address"/>
                    <button className="ml-[5px] rounded bg-[#62cb5d] text-white w-[100px] max-[350px]:mt-[15px] max-[350px]:ml-auto max-[350px]:mr-auto">SUBMIT</button>
                </form>
                <p className="mt-[50px] text-slate-300 font-gilroy_600 max-[350px]:text-center">FOLLOW US</p>
                <div className="flex max-[350px]:ml-auto max-[350px]:mr-auto">
                    <Image className="min-[350px]:m-[5px] max-[350px]:ml-auto max-[350px]:mr-auto" width={32} height={32} src={Facebook} alt="Facebook" loading="lazy"/>
                    <Image className="min-[350px]:m-[5px] max-[350px]:ml-auto max-[350px]:mr-auto" width={32} height={32} src={Twitter} alt="Twitter" loading="lazy"/>
                    <Image className="min-[350px]:m-[5px] max-[350px]:ml-auto max-[350px]:mr-auto" width={32} height={32} src={Youtube} alt="Youtube" loading="lazy"/>
                    <Image className="min-[350px]:m-[5px] max-[350px]:ml-auto max-[350px]:mr-auto" width={32} height={32} src={LinkedIn} alt="LinkedIn" loading="lazy"/>
                    <Image className="min-[350px]:m-[5px] max-[350px]:ml-auto max-[350px]:mr-auto" width={32} height={32} src={Instagram} alt="Instagram" loading="lazy"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;