import HeroImage from "@/components/hero-image/HeroImage"
import { Button, CVbutton } from "@/components/button/Button"
import Typewriter from 'typewriter-effect';


export default function HeroSection() {
    return (
        <div className="HeroSection">
            
            <div className="HeroSectionDiv">
                <h2>Dear, My Name Is</h2>
                <h1>Danish Yameen</h1>
                <h3>And I'm a  Frontend Developer </h3>

                <div className="buttonDiv">
                    <Button />
                    <CVbutton />
                </div>

            </div>

            <div className="">
                <HeroImage />
            </div>


        </div>
    )
}

