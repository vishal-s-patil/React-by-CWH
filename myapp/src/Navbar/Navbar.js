import react, {useState} from "react";
import './Navbar.css'
import {Link} from 'react-router-dom';

function Navbar(props){
    const [myStyle, setStyle] = useState({
        color : 'black',
        backgroundColor : 'white'
    })

    return (
        <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="myNavbar">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="/home">TextUtiles</a> */}
                <Link class="navbar-brand" to="/">TextUtiles</Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        {/* <a class="nav-link active" aria-current="page" href="/">Home</a> */}
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                        {/* <a class="nav-link" href="/about">About</a> */}
                        <Link class="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="d-flex">
                    <div className="bg-primary rounded mx-1" onClick={() => {props.changeMode('primary')}} style={{height : '22px', width : '22px',border : '1px solid #00ffe5'}}></div>
                    <div className="bg-warning rounded mx-1" onClick={() => {props.changeMode('warning')}} style={{height : '22px', width : '22px',border : '1px solid #00ffe5'}}></div>
                    <div className="bg-success rounded mx-1" onClick={() => {props.changeMode('success')}} style={{height : '22px', width : '22px',border : '1px solid #00ffe5'}}></div>
                    <div className="bg-danger rounded mx-1" onClick={() => {props.changeMode('danger')}} style={{height : '22px', width : '22px',border : '1px solid #00ffe5'}}></div>
                    <div className="bg-light rounded mx-1" onClick={() => {props.changeMode('light')}} style={{height : '22px', width : '22px',border : '1px solid #00ffe5'}}></div>
                    <div className="bg-dark rounded mx-1" onClick={() => {props.changeMode('dark')}} style={{height : '22px', width : '22px', border : '1px solid #00ffe5'}}></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar