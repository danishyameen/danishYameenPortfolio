import { FormButton } from "../button/Button"



export default function Form() {
    return (
        <div className="formSection">
            <form action="">
                <div className="form">
                    <input type="text" name="name" id="" placeholder="name" />
                    <br />
                    <input type="text" name="email" id="" placeholder="email" />
                    <br />
                    <input type="text" name="subject" id="" placeholder="subject" />
                </div>
                <div className="formTextArea">
                    <textarea name="" id="" placeholder="Describe Project Details"></textarea>
                    <FormButton />
                </div>
                                
            </form>
        </div>
    )
}