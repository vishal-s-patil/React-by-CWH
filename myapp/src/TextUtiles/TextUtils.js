import react, {useState} from "react";
import './Textutilscss.css'

export default function TextUtils(props)
{
    let handleUpperCase = () => {
        // console.log("upper");
        let newStr = text.toUpperCase();
        setText(newStr);
    }

    let handleLowerCase = () => {
        // console.log("Lower");
        let newStr = text.toLowerCase();
        setText(newStr);
    }

    let handleExtraSpaces = () => {
        let splitted = text.split(/[ ]+/);
        setText(splitted.join(" "))
    }

    let handleCopy = () => {
        let textToSelect = document.getElementsByClassName("textArea")[0];
        textToSelect.select();
        navigator.clipboard.writeText(textToSelect.value);
    }

    let handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value)
    }    

    const [text, setText] = useState("")
    return (
        <>
        <div className="container" style={props.myStyle}>
            <textarea cols="100" rows="9" value={text} onChange={handleOnChange} className="textArea" style={props.myStyle}></textarea>

            <div className="myBtns">
                <button onClick={handleUpperCase} className="btnn" style={props.myStyle}>convert to upper case</button>

                <button onClick={handleLowerCase} className="btnn" style={props.myStyle}>convert to lower case </button>

                <button onClick={handleExtraSpaces} className="btnn" style={props.myStyle}>Remove Extra Spaces</button>

                <button onClick={handleCopy} className="btnn" style={props.myStyle}>copy text</button>
            </div>


            <p>word count : {text.split(" ").length}</p>
            <p>characters count : {text.length}</p>
        </div>
        </>
    )
    
}