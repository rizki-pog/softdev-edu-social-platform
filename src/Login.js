import { Button } from '@material-ui/core';
import React, { useEffect, useContext, useState } from 'react';
import './Login1.css'
import { signInWithGoogle } from './firebase';
import { UserContext } from './UserProvider';
import { Link } from 'react-router-dom';
import logo from './logo.PNG'; 
import bgvideologin from "./bgvideo-login.mp4"


export default function Login() {
  

  
  return (
    <div className="v4_23">
        <div className="v10_213">
        <video
                autoPlay
                loop
                muted
                id="video"
                style = {{
                    position: "relative",
                    width: "100%",
                    left: "50%",
                    top: "50%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: "-1"
                }}>
                    <source src={bgvideologin} type = "video/mp4" />
            </video>
        </div>
        <div className="v4_25">
            <span className="v4_26">PDF Report</span>
            <span className="v4_27">Video PPT</span>
            <span className="v4_28">Project ZIP Files</span>
        </div>

        
        <div onClick={signInWithGoogle} className="v7_243">
            <div className="v7_244">
                <div className="v10_245"></div>
                <div className="v8_74"></div>
                <span className="v7_246">Sign in with Google</span>
                <div className="v10_207">
                    <div className="v10_208">
                        <div className="v10_209"></div>
                        <div className="v10_210"></div>
                        <span className="v10_211">Sign in with Google</span>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
);
}
// import React from 'react'
// import { Button } from "@material-ui/core"
// import "./Login.css";
// import { auth, provider } from './firebase';

// function Login() {
//     const signIn = () => {};
//         auth.signInWithRedirect(provider).catch((error) => alert(error.message));

//     return (
//         <div classname="login">
//             <div className="login__logo">
//                 <img 
//                     src="https://upload.wikimedia.org/wikipedia
//                     /commons/f/f1/Pornhub-logo.svg"
//                 />
//             </div>

//             <Button onClick={signIn}>Sign In</Button>
//         </div>
//     )
// }

// export default Login