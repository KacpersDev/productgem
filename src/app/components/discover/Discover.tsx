'use client';
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
        <div className="flex justify-center font-gilroy mt-[100px] max-[1500px]:grid">
            <div className="min-[1500px]:ml-[150px]">
                <p className="text-white font-gilroy_600 w-[750px] text-[80px] max-[760px]:text-[50px] max-[760px]:w-[450px] max-[760px]:ml-auto max-[760px]:mr-auto max-[760px]:text-center max-[415px]:w-[300px] max-[415px]:text-[30px]">Discover Success with <span className="font-gilroy_900 text-[#62cb5d]">ProductGem.</span></p>
                <div className="flex mt-[50px] max-[760px]:grid">
                    <div className="flex bg-[#62cb5d] rounded-2xl w-[175px] h-[45px] max-[760px]:ml-auto max-[760px]:mr-auto max-[760px]:mb-[50px]" onClick={(() => location.href = 'https://www.productgem.co/sign-up')}>
                        <Image className="w-[32px] h-[32px] mt-[7px] ml-[15px]" src={Arrow} alt="Arrow" loading="lazy"/>
                        <button className="text-white w-[150px] h-[45px] rounded-2xl font-gilroy_600">Get Started</button>
                    </div>
                    <div className="grid">
                        <div className="flex mt-[-25px]">
                            <div>
                                <Image width={40} height={40} className="w-[48px] h-[48px] m-[20px] mt-[3px] max-[530px]:hidden" src={Sparks} alt="Sparks" loading="lazy"/>
                            </div>
                            <div className="w-[500px] max-[530px]:w-[300px] max-[530px]:ml-auto max-[530px]:mr-auto max-[530px]:text-center">
                                <p className="text-white font-gilroy_600 text-[18px]">Access daily winners, private suppliers, creative assets, and Aliexpress links
                                    <span className="text-green-500"> & much more</span></p>
                            </div>
                        </div>
                        <div className="flex ml-[15px] max-[500px]:grid max-[500px]:ml-auto max-[500px]:mr-auto max-[500px]:mt-[25px]">
                            <Image className="w-[90px] h-[25px] min-[500px]:m-[15px]" src={Amazon} alt="Amazon" loading="lazy"/>
                            <Image className="w-[100px] h-[30px] min-[500px]:m-[7px]" src={EBay} alt="EBay" loading="lazy"/>
                            <Image className="w-[100px] h-[30px] min-[500px]:m-[7px]" src={Shopify} alt="Shopify" loading="lazy"/>
                            <Image className="w-[120px] h-[30px] min-[500px]:m-[7px]" src={AliExpress} alt="AliExpress" loading="lazy"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-[-30px] flex-shrink-0 max-[1500px]:w-[1px]">
                <Image className="w-[800px]" src={Abstract} alt="Abstract"/>
            </div>
        </div>
    )
}

export default Discover;