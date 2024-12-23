import Form from "@/components/form/Form"
import { FaRegUserCircle } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaRegEnvelope } from "react-icons/fa"

export default function ContactPage() {
    return (
        <div className="ContactPage">
            <div className="ContactPageDiv1">
                <h1>Contact Me</h1>
                <div className="ContactPageSubDiv1">
                    <hr /><h2 >Get In Touch </h2><hr />
                </div>
            </div>

            <div className="ContactPageDiv2 ">
                <div className="ContactPageSubDiv_2">
                    <div className="ContactPageSubDiv3">
                        <h2>Connect with me</h2>
                        <p >I am Front-end and Back-end Web Developer. I can build Dynamic Webistes for you and your business. I will give you to my best efforts to the job. If you want to build your own websites so don't waste your time amd money you can contact me my description is given below.</p>
                    </div>

                    <div className="ContactPageSubDiv4">
                        <div className="ContactPageSubDiv5">
                            <FaRegUserCircle color="#ed143d" size="25px" />
                        </div>
                        <div className="ContactPageSubDiv6">
                            <h2>Name</h2>
                            <p >Danish Yameen</p>
                        </div>
                    </div>

                    <div className="ContactPageSubDiv7">
                        <div className="ContactPageSubDiv5">
                            <SlLocationPin color="#ed143d" size="25px" />
                        </div>
                        <div className="ContactPageSubDiv6">
                            <h2>Address</h2>
                            <p>karachi, Sindh, Pakistan</p>
                        </div>
                    </div>

                    <div className="ContactPageSubDiv8">
                        <div className="ContactPageSubDiv5">
                            <FaRegEnvelope color="#ed143d" size="25px" />
                        </div>
                        <div className="ContactPageSubDiv6">
                            <h2>Email</h2>
                            <p>danisahyameennew@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="ContactPageSubDiv9">
                    <Form />
                </div>
            </div>
        </div>
    )
}