import Link from "next/link"

function Button() {
    return (

        <div className="HireButton">
            <button>
                <Link className="" href="./contact">Hire Me</Link>
            </button>

        </div>
    )
}

function CVbutton() {
    return (
        <div className="CVbutton">
            <button >
                <Link className="" href="https://drive.google.com/file/d/1QEJduCVW9L3f297pj0X6HKk-9Rj7bcd4/view?usp=drivesdk">Resume CV</Link>
            </button>
        </div>
    )
}

function FormButton() {
    return (
        <div className="FormButton">
            <button>Submit</button>
        </div>
    )
}


export {
    Button,
    CVbutton,
    FormButton
}