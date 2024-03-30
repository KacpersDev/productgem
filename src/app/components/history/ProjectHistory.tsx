import Sales from "@/app/assets/sales.png";

import Image from "next/image";

const ProjectHistory = () => {
    return(
        <div className="flex justify-center mt-[50px] font-gilroy min-[1380px]:mr-[200px] max-[1380px]:grid">
            <div className="flex-shrink-0 max-[1350px]:ml-[30%]">
                <Image className="w-[1500px]" src={Sales} alt="sales" loading="lazy"/>
            </div>
            <div className="">
                <div className="min-[1380px]:ml-[-550px] mt-[175px] max-[1380px]:ml-auto max-[1380px]:text-center">
                    <p className="text-white font-gilroy_600 text-[35px] w-[350px] text-center ml-auto mr-auto mb-[15px] ml-[65px] max-[530px]:w-[300px]">Alap's Background & History.</p>
                    <p className="w-[520px] text-white font-gilroy_600 text-center max-[1380px]:ml-auto max-[1380px]:mr-auto  max-[530px]:w-[300px]">
                        Alap and Khal met through a Discord Group and became friends. Khal was working on <span className="text-[#62cb5d]">ProductGem </span>
                        while Alap was trying to get into Dropshipping.
                    </p>
                    <p className="w-[520px] text-white mt-[10px] font-gilroy_600 text-center max-[1380px]:ml-auto max-[1380px]:mr-auto  max-[530px]:w-[300px]">
                        Before Alap found Khal, he has failed <span className="text-[#62cb5d]">9 Products</span> and nothing was working for him
                        Before using Khal's Product, Alap had <span className="text-[#62cb5d]">never had more than 3 sales / Per-Day</span>.
                        Plus, it was unprofitable.  
                    </p>
                    <p className="w-[520px] text-white mt-[10px] font-gilroy_600 text-center max-[1380px]:ml-auto max-[1380px]:mr-auto  max-[530px]:w-[300px]">
                        After Khal recommended a Product to him, he was blown away. Fairly, Alap worked hard to get everything right for the Branding, 
                        Website & Other needed stuff for the Product. Guess what, on the 1st Day of Launch,
                    </p>
                    <p className="w-[520px] text-white font-gilroy_600 text-center max-[1380px]:ml-auto max-[1380px]:mr-auto  max-[530px]:w-[300px]">
                        Black Friday - He made <span className="text-[#62cb5d]">4 FIGURES</span>! Clean revenue. Crazy Profit Margins. 
                    </p>
                    <p className="w-[520px] text-white mt-[10px] font-gilroy_600 text-center max-[1380px]:ml-auto max-[1380px]:mr-auto  max-[530px]:w-[300px]">
                        Using ProductGem's Product was like: 
                    </p>
                    <p className="font-gilroy_600 text-center max-[530px]:w-[300px] max-[530px]:ml-auto max-[530px]:mr-autovfvf">
                        <span className="text-[#62cb5d]">"My like was a candle & I was putting a flamethrower on it" - Alap</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProjectHistory;