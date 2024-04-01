import Image from "next/image";

import First from "@/app/assets/Photo_23-10-2022_23_30_56.jpg";
import Second from "@/app/assets/dksdsadas.png";
import Third from "@/app/assets/signal-2022-11-30-214815.jpeg"

const Testimonials = () => {
    return(
        <div className="mt-[100px] font-girloy">
            <p className="text-center text-[#62cb5d] tracking-widest text-[12px]">TESTIMONIALS</p>
            <p className="text-center text-white text-[25px] mt-[15px] font-gilroy_600">Reviews About Us?</p>
            <div className="flex justify-center max-[1180px]:grid">
                <div className="grid justify-center mt-[75px] m-[30px] brightness-50">
                    <Image className="w-[100px] h-[100px] bg-[#CACACA] rounded-[100px] z-10 ml-auto mr-auto" src={Second} alt="first"/>
                    <div className="bg-white w-[350px] h-[400px] mt-[-45px] rounded-xl max-[350px]:w-[300px] max-[350px]:h-[390px]">
                        <p className="mt-[75px] ml-[10px] mr-[10px] text-center text-[#8E8E8E]">
                            This is my second time purchasing product gems because it's so good!!! I found a lot of winning products. 
                            And the best thing is the products are new products that are getting sales not saturated products that YouTubers show in the "top 10 products to sell". 
                            Really love product gems and highly recommend to people who are struggling to find winning products
                        </p>
                        <p className="text-center mt-[50px] text-[#8E8E8E] font-gilroy_600">By Tube twins</p>
                    </div>
                </div>
                <div className="grid justify-center mt-[75px] m-[30px]">
                    <Image className="w-[100px] h-[100px] bg-[#CACACA] rounded-[100px] z-10 ml-auto mr-auto" src={First} alt="first"/>
                    <div className="bg-white w-[350px] h-[400px] mt-[-45px] rounded-xl max-[350px]:w-[300px] max-[350px]:h-[390px]">
                        <p className="mt-[75px] ml-[10px] mr-[10px] text-center text-[#8E8E8E]">
                            I don't know how they find their products but I always get consistent sales using their products. It makes it so easy,
                            I never had to purchase another product research tool since I got ProductGem. 10/10 best product research app out there
                        </p>
                        <p className="text-center mt-[50px] text-[#8E8E8E] font-gilroy_600">By Carlos R.</p>
                    </div>
                </div>
                <div className="grid justify-center mt-[75px] m-[30px] brightness-50">
                    <Image className="w-[100px] h-[100px] bg-[#CACACA] rounded-[100px] z-10 ml-auto mr-auto" src={Third} alt="first"/>
                    <div className="bg-white w-[350px] h-[400px] mt-[-45px] rounded-xl max-[350px]:w-[300px] max-[350px]:h-[390px]">
                        <p className="mt-[75px] ml-[10px] mr-[10px] text-center text-[#8E8E8E]">
                            Just got my second batch of recommendations from Product Gems, and I'm genuinely impressed. It's such a relief to find a resource that offers fresh, 
                            not overplayed products that actually catch customer interest. I've been down the rabbit hole of those YouTube 'hot product'...
                        </p>
                        <p className="text-center mt-[50px] text-[#8E8E8E] font-gilroy_600">By Hamza T.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;