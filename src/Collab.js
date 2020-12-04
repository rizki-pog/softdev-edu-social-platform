import { Button } from '@material-ui/core';
import React, { useEffect, useContext, useState } from 'react';
import './Login.css'
import logo from './logo.PNG'; 
import { Link } from 'react-router-dom';
import './Collab1.css';
import bgvideo from "./bgvideo.mp4";
import googlemeet from "./googlemeet.png";
import teams from "./teams.jpg";
import zoom from "./zoom.png";
import bgvideocollab from "./bgvideo-collab.mp4"

function Collab() {
    return (
        <div className="v17_258">
            <div className="v17_396">
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
                    <source src={bgvideocollab} type = "video/mp4" />
            </video>
            </div>
            <div className="v17_377">
                <Link to="https://ugm-connect.web.app/">
                    <span className="v17_378">Forum</span>
                </Link>
                <Link to="/collab">
                    <span className="v17_379">Collab</span>
                </Link>
                <Link to="/">
                    <span className="v17_380">Dashboard</span>
                </Link>
                
            </div>

            <Link to="zoomus">
            <div className="v17_381">
                <span className="v17_382">
                Casual: For lighthearted meetings such as discussions, chats, & presenting undemanding topics
                </span>
                <span className="v17_383">Zoom</span>
                <div className="v17_423"></div>
            </div>
            </Link>

            <Link to="/gMeet">
            <div className="v17_386">
                <span className="v17_387">
                Spontaneous: the go-to destination for random, easygoing collaborations between friends and peers
                </span>
                <span className="v17_388">Google Meet</span>
                <div className="v17_420"></div>
            </div>
            </Link>

            <Link to="/mTeams">
            <div className="v17_391">
                <span className="v17_392">
                Professional: Intended for extensive collabotary discussions between Professors and Academia
                </span>
                <span className="v17_393">Microsoft Teams</span>
                <div className="v17_425"></div>
            </div>
            </Link>

        </div>
        
            
            
            
            
        
    )
}

export default Collab
