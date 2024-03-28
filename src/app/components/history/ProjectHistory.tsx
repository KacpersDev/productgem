import Sales from "@/app/assets/sales.png";

import Image from "next/image";

const ProjectHistory = () => {
    return(
        <div className="flex justify-center mt-[50px] font-gilroy mr-[200px]">
            <div className="">
                <Image className="mt-[20px]" src={Sales} alt="sales" loading="lazy"/>
            </div>
            <div>
                <div className="ml-[-550px] mt-[175px]">
                    <p className="text-white font-gilroy_600 text-[35px] w-[350px] text-center ml-auto mr-auto mb-[15px] ml-[65px]">Alap's Background & History.</p>
                    <p className="w-[520px] text-white font-gilroy_600 text-center">
                        Alap and Khal met through a Discord Group and became friends. Khal was working on <span className="text-[#62cb5d]">ProductGem </span>
                        while Alap was trying to get into Dropshipping.
                    </p>
                    <p className="w-[520px] text-white mt-[10px] font-gilroy_600 text-center">
                        Before Alap found Khal, he has failed <span className="text-[#62cb5d]">9 Products</span> and nothing was working for him
                        Before using Khal's Product, Alap had <span className="text-[#62cb5d]">never had more than 3 sales / Per-Day</span>.
                        Plus, it was unprofitable.  
                    </p>
                    <p className="w-[520px] text-white mt-[10px] font-gilroy_600 text-center">
                        After Khal recommended a Product to him, he was blown away. Fairly, Alap worked hard to get everything right for the Branding, 
                        Website & Other needed stuff for the Product. Guess what, on the 1st Day of Launch,
                    </p>
                    <p className="w-[520px] text-white font-gilroy_600 text-center">
                        Black Friday - He made <span className="text-[#62cb5d]">4 FIGURES</span>! Clean revenue. Crazy Profit Margins. 
                    </p>
                    <p className="w-[520px] text-white mt-[10px] font-gilroy_600 text-center">
                        Using ProductGem's Product was like: 
                    </p>
                    <p className="font-gilroy_600 text-center">
                        <span className="text-[#62cb5d]">"My like was a candle & I was putting a flamethrower on it" - Alap</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectHistory;