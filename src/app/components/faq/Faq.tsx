const Faq = () => {
    return(
        <div className="font-gilroy mt-[100px]">
            <p className="text-center text-[#62cb5d] tracking-widest text-[12px]">FREQUENTLY ASKED QUESTIONS</p>
            <p className="text-center text-white text-[25px] mt-[15px] font-gilroy_600">FAQ?</p>
            <div className="grid justify-center mt-[25px]">
                <div className="bg-[#202020] w-[800px] h-[65px] rounded-xl">
                    <p className="font-gilroy_600 text-white m-[10px] text-[20px] mt-[17px] ml-[20px]">What is "ProductGem" & What We Do ?</p>
                </div>
                <div className="bg-[#202020] w-[800px] h-[65px] rounded-xl mt-[10px]">
                    <p className="font-gilroy_600 text-white m-[10px] text-[20px] mt-[17px] ml-[20px]">Here will be second question?</p>
                </div>
                <div className="bg-[#202020] w-[800px] h-[65px] rounded-xl mt-[10px]">
                    <p className="font-gilroy_600 text-white m-[10px] text-[20px] mt-[17px] ml-[20px]">Here will be third question?</p>
                </div>
            </div>
            <button className="text-white font-gilroy_600 bg-[#62cb5d] w-[250px] h-[45px] grid justify-center ml-auto mr-auto mt-[30px] text-[18px] rounded-2xl
            pt-[7px]">Start 7-Day: Free Trial</button>
        </div>
    )
}

export default Faq;