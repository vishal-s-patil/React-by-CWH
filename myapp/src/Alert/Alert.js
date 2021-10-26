import react from "react";
import './Alert.css'

function Alert(props){
    return (
        <div style={{height: "20px"}}>
           {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" id="myAlert">
                <strong>{props.alert.msg}</strong>
            </div>}
        </div>
    );
}

export default Alert;