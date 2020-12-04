import React, { useEffect, useState } from 'react'
import"./Chat.css";
import ChatHeader from './ChatHeader';
import Post from './Post';    
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { selectUser } from "./features/userSlice";
import db from "./firebase";
import firebase from "firebase";
import { storage } from "./firebase";
import SendRoundedIcon from '@material-ui/icons/SendRounded';
//import forumBG from './forumBG.mp4';

function Chat() {

    const channelId = useSelector(selectChannelId);
    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const [post, setPost] = useState([]);
    const [message, setMessage] = useState("");
    const [image, setImage] = useState(null);
    const [progress, setProgress] = useState(0);
      


    const handleChange = (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
      
    const handleUpload = (e) => {
        e.preventDefault();
        
        if (image){
            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on("state_changed", snapshot => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
            },
            error => {console.log(error);},
            () => {
            storage.ref("images").child(image.name).getDownloadURL().then(url => {
                db.collection("channels").doc(channelId).collection("post").add({
                    user: user,
                    message: message,
                    url: url,
                    timestamp: firebase.firestore.FieldValue.serverTimestamp()
                })
            });
        });
    } else {
        db.collection("channels").doc(channelId).collection("post").add({
            user: user,
            message: message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
        setMessage("");
        setImage(null);
        setProgress(0);
    }

    useEffect(() => {
        if (channelId) {
            db.collection("channels").doc(channelId).collection("post").orderBy("timestamp", "asc").onSnapshot((snapshot) =>
                setPost(snapshot.docs.map((doc) => doc.data()))   
            );
        }
    }, [channelId])


    return (
    
        <div className="chat">
            <ChatHeader channelName={channelName} />


            <div className="chat__messages">
          

                {post.map(post => (
                    <Post
                        user = {post.user} 
                        message = {post.message}
                        url = {post.url} 
                        timestamp = {post.timestamp}/>
                ))}
            </div>

            <div>
            <form disabled={!channelId} onSubmit={handleUpload}>
                    <div className="chat__wrapper">
                        <div>
                        <input className="text__box" type="text" value={message} disabled={!channelId} onChange={e => setMessage(e.target.value)} placeholder={'Message'} />
                        </div>
                        <div>
                        <progress className="progress" value={progress} max="100" /> 
                        <input className="fileupload" type="file" disabled={!channelId} onChange={handleChange} />
                        </div>
                        <div>
                        <span className="Send__Icon" disabled={!channelId}>
                            <SendRoundedIcon type='submit' onClick={handleUpload} />
                        </span>  
                        </div>
                    </div>
                   
                </form>
            </div>
        </div> 
    )
}

export default Chat