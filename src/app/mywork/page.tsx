import Link from "next/link"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";

export default function MyWork() {
    return (
        <div className="MyWorkMainDiv">
            <div className="MyWorkDiv1">
                <h1>My Work</h1>
                <div className="MyWorkSubDiv1">
                    <hr/><h2>I Made Projects</h2><hr/>
                </div>
            </div>
            <div className="MyWorkDiv2">
                <div className="MyWorkDivSub_1">
                    <div className="MyWorkDivSub_2">
                        <div className="MyWorkDivSub_3">
                            <div className="MyWorkDivSub_4">
                                <FaHtml5 color="red " size="50px" />
                                <RiTailwindCssFill color="#22d3ee" size="50px" />
                                <RiNextjsFill color="black" size="50px" />
                            </div>
                            <h1>zKing Man</h1>
                            <h2>zKing-man is a fully complete responsive website created jointly by HTML5 Tailwind Css & NextJS</h2>
                            <br />
                            <h4>
                                <Link href="https://motors-lime.vercel.app/">See Website</Link>
                            </h4>
                        </div>

                        <div className="MyWorkDivSub_3">
                            <div className="MyWorkDivSub_4">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                            </div>
                            <h1>Uptown</h1>
                            <h2>Uptown is a full responsive single page website created jointly by HTML5, CSS3 and BootStrap. </h2>
                            <br />
                            <h4><Link href="https://uptown-web.web.app">See Website</Link></h4>
                        </div>

                        <div className="MyWorkDivSub_3">
                            <div className="MyWorkDivSub_5">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1>Saylani wlafare</h1>
                            <h2>This is a full responsive single page website created by HTML5 CSS3 BootStrap and JavaScript</h2>
                            <br />
                            <h4><Link href="https://saylani-assignments-29c16.web.app/saylani%20welfare%20page/index.html">See Website</Link></h4>
                        </div>

                        <div className="MyWorkDivSub_3">
                            <div className="MyWorkDivSub_5">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1>O.Galaxy</h1>
                            <h2>O.Galaxy is a fully responsive smart phone website created jointly by HTML5, CSS3 BootStrap & Javascript</h2>
                            <br />
                            <h4><Link href="https://smartphoneweb-1.web.app">See Website</Link></h4>
                        </div>

                        <div className="MyWorkDivSub_3">
                            <div className="MyWorkDivSub_5">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <BsBootstrapFill color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1>Quiz App</h1>
                            <h2>Build a quiz app website created jointly by HTML5, CSS3, BootStrap & Javascript.</h2>
                            <br />
                            <h4><Link href="https://saylani-quizapp.web.app">See Website</Link></h4>
                        </div>

                        <div className="MyWorkDivSub_3">
                            <div className="MyWorkDivSub_4">
                                <FaHtml5 color="red " size="50px" />
                                <FaCss3Alt color="blue" size="50px" />
                                <IoLogoJavascript color="#8B8000" size="50px" />
                            </div>
                            <h1>Stop Watch App</h1>
                            <h2>Stop Watch App is a fully responsive website created jointly by HTML5, CSS3 & Javascript</h2>
                            <br />
                            <h4><Link href="https://stopwatch-2020-21.web.app/">See Website</Link></h4>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}