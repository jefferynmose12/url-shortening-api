import React from 'react';
import Hamguber from "../images/icon-hamburger.svg"

const customStyle1 = {
    backgroundColor : "hsl(180, 66%, 49%)",
    color : "white",
    padding: "3px 13px",
    borderRadius: "50px",
    fontSize: "13px",
    fontWeight: "800px"
}

const customStyle2 = {
    color : "hsl(180, 66%, 49%)",
    padding: "3px 0",
    borderRadius: "50px",
    fontSize: "20px",
    fontWeight: "800px",
}


function Login() {
    return (
        <div className= "">
            <nav className="">
                <input type="checkbox" id="check" />
                <label for="check" class="" >
                    <img src={Hamguber} alt="" />
                </label>
                <ul>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                    <li>Login</li>
                    <li style={customStyle2}>Sign up</li>
                </ul>
            </nav>
            <div className="">
                <ul>
                    <li>Login</li>
                    <li style={customStyle1}>Sign up</li>
                </ul>  
            </div>
        </div>
    )
}

export default Login

