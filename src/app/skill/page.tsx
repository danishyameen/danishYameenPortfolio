import { Progress } from "@/components/ui/progress"


export default function SkillPage() {
    return (
        <div className="SkillPage">
            <div className="SkillPageDiv1">
                <h1>My Skill</h1>
                <div className="SkillPageSubDiv1">
                    <hr/><h2>What I Know</h2><hr />
                </div>
            </div>

            <div className="SkillPageDiv2">

                <div className="SkillPageDiv3">
                    <div className=" SkillPageSubDiv3">
                        <div className="SkiLLPageSubDiv3">
                            <div className="SkillPageSubDivFlex">
                                <h1>HTML5</h1>
                                <h3>90%</h3>
                            </div>
                            <div>
                                <Progress value={90} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>CSS3</h1>
                                <h3>70%</h3>
                            </div>
                            <div>
                                <Progress value={70} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Tailwind CSS</h1>
                                <h3>85%</h3>
                            </div>
                            <div>
                                <Progress value={85} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Javascript ES5, ES6</h1>
                                <h3>70%</h3>
                            </div>
                            <div>
                                <Progress value={70} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Typescript</h1>
                                <h3>80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Firebase</h1>
                                <h3>50%</h3>
                            </div>
                            <div>
                                <Progress value={50} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>GitHub</h1>
                                <h3>60%</h3>
                            </div>
                            <div>
                                <Progress value={60} />
                            </div>
                        </div>

                    </div>


                    <div className=".SkillPageDiv4">
                        <div className="SkillPageSubDiv4">
                            <div className="SkillPageSubDivFlex">
                                <h1>React Js</h1>
                                <h3>70%</h3>
                            </div>
                            <div>
                                <Progress value={70} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Next js</h1>
                                <h3>70%</h3>
                            </div>
                            <div>
                                <Progress value={70} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Canva</h1>
                                <h3>80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Ui library {`(SadCn, Material-UI, Ant-Desin)`}</h1>
                                <h3>80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Wordpress {`(Theming - Saliant, Porto)`}</h1>
                                <h3>75%</h3>
                            </div>
                            <div>
                                <Progress value={75} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Social Media Marketing {`(Facebook, Instagram)`}</h1>
                                <h3>80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>

                        <div className="SkiLLPage_SubDiv">
                            <div className="SkillPageSubDivFlex">
                                <h1>Ecommerce Handling {`(Facebook, Instagram, Whatsapp)`}</h1>
                                <h3>80%</h3>
                            </div>
                            <div>
                                <Progress value={80} />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}