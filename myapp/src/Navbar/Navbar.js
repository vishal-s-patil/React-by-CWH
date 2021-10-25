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
                <a class="navbar-brand" href="#">TextUtiles</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        {/* <a class="nav-link active" aria-current="page" href="/home">Home</a> */}
                        <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li class="nav-item">
                        {/* <a class="nav-link" href="/about">About</a> */}
                        <Link class="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>

                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
                    <label className="form-check-label" HTMLFor="flexSwitchCheckDefault">Enable dark mode</label>
                </div>
            </div>
        </nav>
    );
}

export default Navbar