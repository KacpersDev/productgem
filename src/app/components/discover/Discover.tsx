import Abstract from "@/app/assets/Abstract.png";

import Image from "next/image";

const Discover = () => {
    return(
        <div className="flex justify-center">
            <div>
                <p>Discover Success with <span>ProductGem.</span></p>
            </div>
            <div>
                <Image src={Abstract} alt="Abstract"/>
            </div>
        </div>
    )
}

export default Discover;