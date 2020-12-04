import React, { useEffect, useState } from 'react'
import"./Chat.css";
import ChatHeader from './ChatHeader';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';    
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase"
import firebase from "firebase";    
import bgvideo from "./bgvideo.mp4"
import bgvideoforum from "./bgvideo-forum.mp4"

function Chat() {
        const channelId = useSelector(selectChannelId);
        const user = useSelector(selectUser);
        const channelName = useSelector(selectChannelName);
        const [input, setInput] = useState("");
        const [messages, setMessages] = useState([]);

        useEffect(() => {
            if (channelId) {

            
            db.collection("channels").doc(channelId).collection("messages")
            .orderBy("timestamp", "asc").onSnapshot((snapshot) => 
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
            
            }
        }, [channelId])     

        const sendMessage = e => {
            e.preventDefault();

            db.collection("channels").doc(channelId).collection("messages").add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,

            });

            setInput("");
        }

    return (
        <div className="chat">
            <ChatHeader channelName={channelName} />
            
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
                    <source src={bgvideoforum} type = "video/mp4" />
            </video>
            <div className="chat__messages">
                {messages.map(message => (
                    <Message
                        timestamp = {message.timestamp}
                        message = {message.message}
                        user = {message.user} />
                ))}
            </div>

            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input value={input}
                    disabled={!channelId}
                    onChange={e => setInput(e.target.value)}
                    placeholder={'Message'} />
                    <button
                    disabled={!channelId}
                    className="chat__inputButton"
                    type='submit'
                    onClick={sendMessage}>
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>

            </div>
            
        </div>
    )
}

export default Chat
