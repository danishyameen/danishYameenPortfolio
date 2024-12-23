import Image from "next/image"
import Profile from "@/app/img/profile.png"

export default function HeroImage(){
    return(
        <div className="HeroImage">
            <Image src={Profile} alt="HeroImage" width="450" height={100}/>
        </div>
    )
}