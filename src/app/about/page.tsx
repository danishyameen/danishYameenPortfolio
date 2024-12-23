import Image from "next/image"
import Profile from "@/app/img/profileImg.png"
import { Button, CVbutton } from "@/components/button/Button"

export default function AboutPage() {
    return (
        <div className="AboutPage">
            <div className="AboutPageDiv1">
                <h1>About Me</h1>
                <div className="AboutPageSubDiv1">
                    <hr/><h2>Who I Am</h2><hr />
                </div>
            </div>
            <div className="AboutPageDiv2">
                <div className="AboutPageSubDiv2">
                    <Image src={Profile} alt="" />
                </div>
                <div className="AboutPageSubDiv3">
                    <h2>I'm Danish Yameen</h2>
                    <h3>I'm Front web Developer</h3>
                    <p>I am glad to introduce myself as a highly and skilled Front-end web developer. I am a dilligent person who works hard and pays attention to detail. I'm flexible, quick to pick up new skills, and eager to learn from others. I have start learning web develompent since 2023 and to carry on. I have 1year of learning experience and developed muiltiple projects using latest technology. I am a student of governor Sindh IT Program. I am learned multiple technology Html5, Css3, JavaScript, ES5 & ES6, Typescript, BootStrap, Ant-Design, Material-Ui, Canva, Firebase, ReactJs, NextJS, Php-Crud, WordPress (Theming and Customization), Digital Marketing. In future i am also learning Web-3.0 Python programing, Ai & Metaverse technoloy. I have search my problem and solved using google, youtube and my senior Teachers those are helped me in project.</p>

                    <div className="AboutPageSubDiv4">
                        <Button />
                        <CVbutton />
                    </div>
                </div>
            </div>
        </div>
    )
}