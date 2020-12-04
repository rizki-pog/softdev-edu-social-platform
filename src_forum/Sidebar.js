import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import { Avatar } from '@material-ui/core';
import logo from './logocon.png'; 
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';
import {Dropdown} from "semantic-ui-react";
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Link } from 'react-router-dom';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Sidebar() {
    const user = useSelector(selectUser);
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        db.collection('channels').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                id: doc.id,
                channel: doc.data(),
            }
            )))
        ))
    }, []);

    const handleAddChannel = () => {
        const channelName = prompt('Enter a forum name');
        if (channelName) {
            db.collection('channels').add({
                channelName: channelName
            });
        }
    }

  
    return (
        <div className="sidebar">
            <div className="sidebar__top">
            <img src={logo} alt="logo"  className="logo" />
            </div>

            <div className="sidebar__channelsHeader">
                    <div className="sidebar__chanheader">
                        <h3>FORUMS</h3>
                    </div>
                        <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsList">
                        {channels.map(({ id, channel }) => (
                            <SidebarChannel 
                            key={id}
                            id={id}
                            channelName={channel.channelName} />
                        ))}
                </div>
            </div>
           
            
            
            <div className="voice__wrapper"> 
                
                    <SignalCellularAltIcon
                        className="sidebar__voiceIcon"
                        fontSize="large" />
        
            
                <div className="sidebar__voiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                        <InfoOutlinedIcon />
                        <CallIcon />
                </div>

                <div className="sidebar__videoCall">    
                            <VideoCallIcon />     
                </div>
            </div>




            <div className="sidebar__profile">
                    <Avatar src={user.photo}/>
                    <div className="sidebar__profileInfo">
                        <h4>{user.displayName}  </h4>
                        <p>#{user.uid.substring(0,5)}</p>
                    </div>

                    <div className="sidebar__profileIcons">
                        <MicIcon />
                        <HeadsetIcon />
                        <SettingsIcon />
                        <div className="sidebar__signout">
                            <ExitToAppIcon />
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Sidebar;