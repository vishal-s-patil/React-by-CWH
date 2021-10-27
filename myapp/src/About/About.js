import react from "react"; 
import './About.css'

function About(props){  
    return (
        <div id="myPara" style={props.myStyle}>
            <p>
                As Bootstrap 5 continues to mature, more and more styles will be built with CSS variables as a means to provide more real-time customization without the need to always recompile Sass. Our approach is to take our source Sass variables and transform them into CSS variables. That way, even if you don’t use CSS variables, you still have all the power of Sass. This is still in-progress and will take time to fully implement.
            </p>
        </div>
    );
}

export default About;