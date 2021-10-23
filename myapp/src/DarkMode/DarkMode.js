import React, {useState} from "react";
import './darkmode.css'

export default function DarkMode(){
    const [myMode, setMode] = useState({
        color : 'white',
        backgroundColor : 'black'
    });

    const [btnMode, setBtnMode] = useState("Enable dark mode");

    const toggleMode = () =>{
        if(myMode.color == 'black'){
            setBtnMode('Enable light mode');
            setMode({
                color : 'white',
                backgroundColor : 'black'
            })
        }
        else {
            setBtnMode('Enable dark mode');
            setMode({
                color : 'black',
                backgroundColor : 'white'
            })
        }
    }
    return (
        <>
            <div className="container" style={myMode}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolor, suscipit esse commodi, nam nesciunt est alias, soluta consequatur accusantium corporis deleniti eius sit odit molestias sequi laborum sed ab!
                </p>
                <button className="toggle" onClick={toggleMode}>{btnMode}</button>
            </div>
        </>
    );
}