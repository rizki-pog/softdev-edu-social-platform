import React from 'react'
import "./Message.css";
import { Avatar } from '@material-ui/core';

function Message({ timestamp, user, message }) {
    return (
        <div classname='message'>
            <div className="message__wrapper">
                <div className="message__avatar"> 
                    <Avatar src={user.photo} />
                </div>
                <div className="message__username">
                    <h4>{user.displayName} </h4>
                </div>
                <div className="message__timestamp">
                    {new Date(timestamp?.toDate()).toUTCString()}                       
                </div>
                <div className="message__content">
                    {message}
                </div>
            </div>
        </div>
    );
}

export default Message
