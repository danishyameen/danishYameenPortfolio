import Image from "next/image"
import DaniyalNagori from "@/app/img/team8.png"
import AmeenAlam from "@/app/img/team6.png"
import HamzahSyed from "@/app/img/team7.png"
import  AliMughal from "@/app/img/team1.png"
import GhousAhmed from "@/app/img/team2.png"
import BasitAhmed from "@/app/img/team3 (2).png"
export default function TeamPage() {
    return (
        <div className="TeamPage">
            <div className="TeamPageDiv1">
                <h1>My Team</h1>
                <div className="TeamPageDiv2 flex">
                    <hr className="horizontal1"/><h2>Who With Me</h2><hr className="horizontal2"/>
                </div>
            </div>
            <div className="TeamPageDiv3">
                <div className="TeamPageDiv4">
                    <div className="TeamPageDiv5">
                        <div className="TeamPageDivContent">
                            <div className="TeamPageDivImg">
                                <Image src={DaniyalNagori} className="image1" alt="Daniyal Nagori" />
                            </div>
                            <h1>Daniyal Nagori</h1>
                            <h4>CEO at Giaic, Piaic Program & Pana Cloud Software House. He is a full stack Software Engeeier.</h4>


                        </div>

                        <div className="TeamPageDivContent">
                            
                                <div className="TeamPageDivImg">
                                    <Image src={AmeenAlam} className="image2" alt="Ameen Alam" />
                                </div>
                            
                            <h1>Ameen Alam</h1>
                            <h4>Faculty Head at Giaic Program. He is a Certified AWS Developer, Certified Kubernetes Application Developer</h4>
                        </div>

                        <div className="TeamPageDivContent">
                            <div className="TeamPageDivImg">
                                <Image src={HamzahSyed} className="image3 w-[130px] mx-auto h-auto" alt="Hamzah Syed" />
                            </div>
                            <h1>Hamzah Syed</h1>
                            <h4>Senior Teacher at Giaic & Piaic Program. Top-Rated web developer & Expert JAMStack, React and Next.js </h4>

                        </div>

                        <div className="TeamPageDivContent">
                            
                            <div className="TeamPageDivImg">
                                <Image src={AliMughal} className="image4" alt="Ali Mughal" />
                            </div>
                            
                            <h1>Muhammad Ali Mughal</h1>
                            <h4>Founder & CEO of Jawan Pakistan &amp; Job Creation Program. Studies at National University Karachi</h4>

                        </div>

                        <div className="TeamPageDivContent ">
                            
                            <div className="TeamPageDivImg">
                                <Image src={GhousAhmed} className="image5" alt="Ghous Ahmed" />
                            </div>
                            
                            <h1>Ghous Ahmed</h1>
                            <h4>Senior Software Engeeier at Tech Kolachi & Senior Teacher at Mass Training & Job Creation Program.</h4>

                        </div>

                        <div className="TeamPageDivContent">
                            
                            <div className="TeamPageDivImg">
                                <Image src={BasitAhmed} className="image6" alt="Basit Ahmed" />
                            </div>

                            
                            <h1>Abdul Basit Ahmed</h1>
                            <h4>Assistant trainer at Saylani Welfare Mass Training & Job Creation Program. Studies at University of Karachi</h4>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}