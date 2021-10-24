import react, {useState} from "react";
import './Textutilscss.css'

export default function TextUtils(props)
{
    const [myStyle, setStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })

    const handleModeBtn = ()=>{
        if (props.mode === 'light'){
            setStyle({
                color : 'white',
                backgroundColor : 'black'
            })
        }
        else{
            setStyle({
                color : 'black',
                backgroundColor : 'white'
            })
        }
    }

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
        <div className="container" style={myStyle}>
            <textarea cols="30" rows="10" value={text} onChange={handleOnChange} className="textArea" style={myStyle}></textarea>

            <button onClick={handleUpperCase} className="btnn" style={myStyle}>convert to upper case</button>

            <button onClick={handleLowerCase} className="btnn" style={myStyle}>convert to lower case </button>

            <button onClick={handleExtraSpaces} className="btnn" style={myStyle}>Remove Extra Spaces</button>

            <button onClick={handleCopy} className="btnn" style={myStyle}>copy text</button>

            <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode} onChange={handleModeBtn}/>
                <label className="form-check-label" HTMLFor="flexSwitchCheckDefault">Enable dark mode</label>
            </div>

            <p>word count : {text.split(" ").length}</p>
            <p>characters count : {text.length}</p>
        </div>
        </>
    )
    
}