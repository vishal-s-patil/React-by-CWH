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
        document.getSelection().removeAllRanges();
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
                <button disabled={text.length === 0} onClick={handleUpperCase} className="btnn" style={props.myStyle}>convert to upper case</button>

                <button disabled={text.length === 0} onClick={handleLowerCase} className="btnn" style={props.myStyle}>convert to lower case </button>

                <button disabled={text.length === 0} onClick={handleExtraSpaces} className="btnn" style={props.myStyle}>Remove Extra Spaces</button>

                <button disabled={text.length === 0} onClick={handleCopy} className="btnn" style={props.myStyle}>copy text</button>
            </div>


            <p>word count : {text.split(" ").filter((ele) => {return ele.length !== 0}).length}</p>
            <p>characters count : {text.length}</p>
        </div>
        </>
    )
    
}