import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "firebase";
import { useSelector } from 'react-redux';
import './Announcements.css';
import AnnouncementMessage from './AnnouncementMessage';

function Announcements() {

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

    const sendMessage = e => {
        e.preventDefault();

        db.collection("announcements").doc("SzQSHx8sW0ApcYkuAjJQ").collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user,

        });

        setInput("");
    }
    return (
        <div className="announcements">

            <div className="announcement__messages">
                {messages.map(message => (
                    <AnnouncementMessage
                        timestamp = {message.timestamp}
                        message = {message.message}
                        user = {message.user} />
                ))}
            </div>

            <div className="announcement__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input value={input}
                    
                    onChange={e => setInput(e.target.value)}
                    placeholder={'Message'} />
                    <button
                    
                    className="announcement__inputButton"
                    type='submit'
                    onClick={sendMessage}>
                        Send Announcement
                    </button>
                </form>

                <div className="announcement__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
            
        </div>
    )
}

export default Announcements
