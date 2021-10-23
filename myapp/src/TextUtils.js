import react, {useState} from "react";
import './Textutilscss.css'

export default function TextUtils(props)
{
    let handleUpperCase = () => {
        console.log("upper");
        let newStr = text.toUpperCase();
        setText(newStr);
    }

    let handleLowerCase = () => {
        console.log("Lower");
        let newStr = text.toLowerCase();
        setText(newStr);
    }

    let handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value)
    }    

    const [text, setText] = useState("")
    return (
        <>
        <title>{props.title}</title>
        <div className="container">
        <textarea cols="30" rows="10" value={text} onChange={handleOnChange} className="text-area"></textarea>

        <button onClick={handleUpperCase} className="upper-btn">convert to upper case </button>

        <button onClick={handleLowerCase} className="lower-btn">convert to upper case </button>

        <p>word count : {text.split(" ").length}</p>
        <p>characters count : {text.length}</p>
        </div>
        </>
    )
    
}