import PrImage from "@/app/assets/pr.png";
import Image from "next/image";

const Pr = () => {
    return(
        <div className="mt-[150px]">
            <Image src={PrImage} alt="Pr" loading="lazy"/>
        </div>
    )
}

export default Pr;