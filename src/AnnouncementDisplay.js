import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "firebase";
import { useSelector } from 'react-redux';
import './AnnouncementDisplay1.css';
import AnnouncementMessage from './AnnouncementMessage';
import AnnouncementDisplayHeader from './AnnouncmentDisplayHeader';
import { Link } from 'react-router-dom';
import bgvideo1 from "./bgvideo-1.mp4";
import bgvideo from "./bgvideo.mp4";

function AnnouncementDisplay() {
    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        {
        db.collection("announcements").doc("SzQSHx8sW0ApcYkuAjJQ").collection("messages")
        .orderBy("timestamp", "asc").onSnapshot((snapshot) => 
            setMessages(snapshot.docs.map((doc) => doc.data()))
        );
        
        }
    }, []) 

    return (
        <div className="v1_643">
            <div className="v1_770">
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
                    <source src={bgvideo1} type = "video/mp4" />
            </video>
            </div>
            <div className="v1_772">
                <div className="v1_771">
                    {messages.map(message => (
                    <AnnouncementMessage
                        timestamp = {message.timestamp}
                        message = {message.message}
                        user = {message.user} />
                ))}</div>
                <Link to="/unauthorized">
                    <div className="v1_769"></div>
                </Link>
                
                
            </div>
            
            <Link to="https://ugm-connect.web.app/">
                <span className="v1_766">Forum</span>
            </Link>
            
            <Link to="/collab">
                <span className="v1_767">Collab</span>
            </Link>
            
            <Link to="/">
                <span className="v1_768">Dashboard</span>
            </Link>
            
        </div>
    )
}


{/* <div className="announcement__messages">
                {messages.map(message => (
                    <AnnouncementMessage
                        timestamp = {message.timestamp}
                        message = {message.message}
                        user = {message.user} />
                ))}
            </div> */}
export default AnnouncementDisplay
