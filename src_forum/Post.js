import React from 'react'
import "./Post.css";
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function Message({ user, message, url, timestamp}) {

    if (url){
        if (message){
            return (
                <div classname='post'>
                    <div className="post__wrapper">
                        <div className="post__avatar"> 
                            <Avatar src={user.photo} />
                        </div>
                        <div className="post__username">
                            <h4>{user.displayName} </h4>
                            {new Date(timestamp?.toDate()).toUTCString()}                       
                        </div>
                        <div className="post__content">           
                            <span>{message}</span>           
                        </div>
                        <div className="post__image">
                            <img src={url} style={{maxWidth: 1000}}/>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div classname='post'>
                    <div className="post__wrapper">
                        <div className="post__avatar"> 
                            <Avatar src={user.photo} />
                        </div>
                        <div className="post__username">
                            <h4>{user.displayName} </h4>
                            {new Date(timestamp?.toDate()).toUTCString()}                       
                        </div>
                        <div className="[post__image">
                            <img src={url} style={{maxWidth: 1000}}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
    
    else {
        return (
            <div classname='post'>
                <div className="post__wrapper">
                    <div className="post__avatar"> 
                        <Avatar src={user.photo} />
                    </div>
                    <div className="post__username">
                        <h4>{user.displayName} </h4>
                        {new Date(timestamp?.toDate()).toUTCString()}                       
                    </div>
                    <div className="post__content">
                        <span>{message}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message