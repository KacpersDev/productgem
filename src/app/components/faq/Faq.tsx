'use client';

import { useState } from "react";

const Faq = () => {

    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);

    return(
        <div className="font-gilroy mt-[100px]">
            <p className="text-center text-[#62cb5d] tracking-widest text-[12px]">FREQUENTLY ASKED QUESTIONS</p>
            <p className="text-center text-white text-[25px] mt-[15px] font-gilroy_600">FAQ?</p>
            <div className="grid justify-center mt-[25px] ">
                <div className={question1 ? "bg-[#202020] w-[800px] h-[200px] rounded-xl hover:cursor-pointer max-[800px]:w-[300px] max-[800px]:ml-auto max-[800px]:mr-auto max-[800px]:text-[15px] max-[800px]:h-[300px]" : "bg-[#202020] w-[800px] h-[65px] rounded-xl hover:cursor-pointer max-[800px]:w-[300px] max-[800px]:ml-auto max-[800px]:mr-auto max-[800px]:text-[15px]"} onClick={(() => setQuestion1(!question1))}>
                    <p className="font-gilroy_600 text-white m-[10px] text-[20px] mt-[17px] ml-[20px] max-[800px]:text-[17px] max-[800px]:text-center">What is "ProductGem" & What We Do ?</p>
                    <p className={question1 ? "text-white mt-[20px] text-[20px] ml-[20px] mr-[20px] max-[800px]:text-[17px] max-[800px]:text-center" : "text-white mt-[20px] max-[800px]:text-[17px] text-[20px] ml-[20px] mr-[20px] hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel molestie nibh. 
                        Curabitur semper erat vel est luctus, sed egestas ligula pharetra. Pellentesque eu massa vehicula, iaculis metus a, volutpat metus. In hac habitasse platea dictumst.
                    </p>
                </div>
                <div className={question2 ? "bg-[#202020] w-[800px] h-[200px] rounded-xl hover:cursor-pointer mt-[5px] max-[800px]:ml-auto max-[800px]:mr-auto max-[800px]:text-[15px] max-[800px]:w-[300px] max-[800px]:mt-[35px] max-[800px]:h-[300px]" : "bg-[#202020] w-[800px] h-[65px] rounded-xl hover:cursor-pointer mt-[5px] max-[800px]:ml-auto max-[800px]:mr-auto max-[800px]:w-[300px] max-[800px]:text-[15px] max-[800px]:mt-[35px]"} onClick={(() => setQuestion2(!question2))}>
                    <p className="font-gilroy_600 text-white m-[10px] text-[20px] mt-[17px] ml-[20px] max-[800px]:text-[17px] max-[800px]:text-center">What is "ProductGem" & What We Do ?</p>
                    <p className={question2 ? "text-white mt-[20px] text-[20px] ml-[20px] mr-[20px] max-[800px]:text-[17px] max-[800px]:text-center" : "text-white max-[800px]:text-[17px] mt-[20px] text-[20px] ml-[20px] mr-[20px] hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel molestie nibh. 
                        Curabitur semper erat vel est luctus, sed egestas ligula pharetra. Pellentesque eu massa vehicula, iaculis metus a, volutpat metus. In hac habitasse platea dictumst.
                    </p>
                </div>
                <div className={question3 ? "bg-[#202020] w-[800px] h-[200px] rounded-xl hover:cursor-pointer mt-[5px] max-[800px]:ml-auto max-[800px]:mr-auto max-[800px]:text-[15px] max-[800px]:w-[300px] max-[800px]:mt-[35px] max-[800px]:h-[300px]" : "bg-[#202020] w-[800px] h-[65px] rounded-xl hover:cursor-pointer mt-[5px] max-[800px]:ml-auto max-[800px]:mr-auto max-[800px]:text-[15px] max-[800px]:w-[300px] max-[800px]:mt-[35px]"} onClick={(() => setQuestion3(!question3))}>
                    <p className="font-gilroy_600 text-white m-[10px] text-[20px] mt-[17px] ml-[20px] max-[800px]:text-[17px] max-[800px]:text-center">What is "ProductGem" & What We Do ?</p>
                    <p className={question3 ? "text-white mt-[20px] text-[20px] ml-[20px] mr-[20px] max-[800px]:text-[17px] max-[800px]:text-center" : "text-white mt-[20px] max-[800px]:text-[17px] text-[20px] ml-[20px] mr-[20px] hidden"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel molestie nibh. 
                        Curabitur semper erat vel est luctus, sed egestas ligula pharetra. Pellentesque eu massa vehicula, iaculis metus a, volutpat metus. In hac habitasse platea dictumst.
                    </p>
                </div>
            </div>
            <button className="text-white font-gilroy_600 bg-[#62cb5d] w-[250px] h-[45px] grid justify-center ml-auto mr-auto mt-[30px] text-[18px] rounded-2xl
            pt-[10px]" onClick={(() => location.href = 'https://www.productgem.co/sign-up')}>Start 7-Day: Free Trial</button>
        </div>
    )
}

export default Faq;