import Abstract from "@/app/assets/Abstract.png";
import Arrow from "@/app/assets/arrow.png";
import Sparks from "@/app/assets/Sparks.png";
import Amazon from "@/app/assets/Amazon.png";
import EBay from "@/app/assets/eBay.png";
import Shopify from "@/app/assets/Shopify.png";
import AliExpress from "@/app/assets/AliExpress.png";

import Image from "next/image";

const Discover = () => {
    return(
        <div className="flex justify-center font-gilroy mt-[100px]">
            <div className="ml-[150px]">
                <p className="text-white text-[50px] font-gilroy_600 w-[750px] text-[80px]">Discover Success with <span className="font-gilroy_900 text-[#62cb5d]">ProductGem.</span></p>
                <div className="flex mt-[50px]">
                    <div className="flex bg-[#62cb5d] rounded-2xl w-[175px] h-[45px]">
                        <Image className="w-[32px] h-[32px] mt-[7px] ml-[15px]" src={Arrow} alt="Arrow" loading="lazy"/>
                        <button className="text-white w-[150px] h-[45px] rounded-2xl font-gilroy_600">Get Started</button>
                    </div>
                    <div className="grid">
                        <div className="flex mt-[-25px]">
                            <div>
                                <Image width={40} height={40} className="w-[48px] h-[48px] m-[20px] mt-[3px]" src={Sparks} alt="Sparks" loading="lazy"/>
                            </div>
                            <div className="w-[500px]">
                                <p className="text-white font-gilroy_600 text-[18px]">Access daily winners, private suppliers, creative assets, and Aliexpress links
                                    <span className="text-green-500"> & much more</span></p>
                            </div>
                        </div>
                        <div className="flex ml-[15px]">
                            <Image className="w-[90px] h-[25px] m-[15px]" src={Amazon} alt="Amazon" loading="lazy"/>
                            <Image className="w-[100px] h-[30px] m-[7px]" src={EBay} alt="EBay" loading="lazy"/>
                            <Image className="w-[100px] h-[30px] m-[7px]" src={Shopify} alt="Shopify" loading="lazy"/>
                            <Image className="w-[120px] h-[30px] m-[7px]" src={AliExpress} alt="AliExpress" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[-30px]">
                <Image width={800} src={Abstract} alt="Abstract"/>
            </div>
        </div>
    )
}

export default Discover;