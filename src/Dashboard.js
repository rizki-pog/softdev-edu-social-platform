import { Button } from '@material-ui/core';
import React, { useEffect, useContext, useState } from 'react';
import './Login.css'
import Sidebar from './Sidebar';
import Chat from './Chat';
import logo from './logo.PNG'; 
import { Link } from 'react-router-dom'
import './dashboard6.css'
import bgvideo2 from "./bgvideo-2.mp4"

import db, { auth } from './firebase';




function Dashboard() {
    
    return (
        <div className="v23_3">

            <div className="v26_5">
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
                    <source src={bgvideo2} type = "video/mp4" />
            </video>
            </div>

            <div className="v23_439">
                <div className="v23_488"></div>
                <div className="v23_487"></div>
                <div className="v26_3"></div>

                <div className="v23_474">
                    <div className="v23_479"></div>
                    <div className="v23_480"></div>
                    <div className="v23_481"></div>
                    <div className="v23_482"></div>
                </div>
            </div>
            
            <Link to= "https://ugm-connect.web.app/">
            <div className="v23_8">
                < div className="v23_9">
                </div>
                
                <span class="v23_10">Forum</span>
    
                <div className="v24_3"></div>
                
            </div>
            </Link>

            <Link to ="/collab">
            <div className="v23_14">
                <div className="v23_15"></div>

                <span class="v23_16">Collab</span>
                <div className="v24_2"></div>
            </div>
            </Link>

            <div className="v23_20">
                <Link to= "/announcements" style={{ textDecoration: 'none' }}>
                    <span class="v23_21">Announcements</span>
                </Link>
                
                <Link to = "/elok" style={{ textDecoration: 'none' }}>
                    <span class="v23_22">eLOK</span>
                </Link>
                
                <Link to = "/simaster" style={{ textDecoration: 'none' }}>
                    <span class="v23_23">SIMASTER</span>
                </Link>
                
                
                <span class="v23_24" onClick = {() => auth.signOut()}   >Log Out</span>
            </div>

            

            
        </div>
        
        
        // <div className="dashboard">
        //     <video
        //         autoPlay
        //         loop
        //         muted
        //         id="video"
        //         style = {{
        //             position: "fixed",
        //             width: "100%",
        //             left: "50%",
        //             top: "50%",
        //             height: "100%",
        //             objectFit: "cover",
        //             transform: "translate(-50%, -50%)",
        //             zIndex: "-1"
        //         }}>
        //             <source src={bgvideo} type = "video/mp4" />
        //     </video>
        //     <div className="dashboard__logo">
        //     <img 
        //         src={logo} alt="logo"  height="150px" 
        //     />
        //     </div>
        //     <Link to ="https://ugm-connect.web.app/">
        //         <Button>Forum</Button>
        //     </Link>
                
        //     <Link to="/collab">
        //         <Button>Collab</Button>
        //     </Link>

        //     <Link to="/announcements">
        //         <Button>Announcements</Button>
        //     </Link>
            
            
        // </div>
    )
}

export default Dashboard
