import SoftwareImage from "@/app/assets/software.png";
import Left from "@/app/assets/left.png";
import Right from "@/app/assets/right.png";

import Image from "next/image";

const Software = () => {
    return(
        <div className="font-gilroy">
            <Image className="w-[256px] ml-auto mr-auto max-[530px]:w-[128px]" src={SoftwareImage} alt="Software image" loading="lazy"/>
            <p className="font-gilroy_600 text-[25px] text-center text-white mt-[25px]">About Our Software?</p>
            <div className="flex justify-center">
                <div className="bg-[#193318] w-[700px] h-[150px] ml-auto mr-auto rounded-2xl mt-[25px] max-[700px]:w-[500px] max-[700px]:h-[180px] max-[500px]:h-[200px] max-[500px]:w-[320px]">
                    <p className="text-white font-gilroy_600 text-[20px] w-[650px] text-center ml-auto mr-auto pt-[14px] max-[700px]:w-[500px] max-[500px]:w-[300px] max-[500px]:text-[16px] max-[500px]:mt-[10px]">
                        ProductGem is an E-Commerse Product Finding Software, where we
                        tend to give best possible Winning Products to our Community. 
                        People who do AmazonFBA to Dropshippers to every in can use it
                        to help find a product to sell 
                    </p>
                </div>
            </div>
        </div>
    )
}
//                <Image className="w-[64px] h-[64px] ml-auto mt-[60px] mr-[-375px] hover:cursor-pointer" src={Left} alt="Left" loading="lazy"/>
//                <Image className="w-[64px] h-[64px] mr-auto mt-[60px] ml-[-375px] hover:cursor-pointer" src={Right} alt="Right" loading="lazy"/>

export default Software;