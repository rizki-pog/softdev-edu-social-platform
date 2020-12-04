import React, { useEffect, useState } from 'react'
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import logo from './logo.PNG'; 
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import db, { auth } from './firebase';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { Link } from 'react-router-dom';

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
        const channelName = prompt('Enter a name forum name');

        if (channelName) {
            db.collection('channels').add({
                channelName: channelName
            });
        }
    }

    


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <Link to="/dashboard">
                    <img src={logo} alt="logo"  className="logo" />
                    <ExpandMoreIcon />
                </Link>
                
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h3>Forum List</h3>
                    </div>
                    
                    <AddIcon onClick={handleAddChannel} className="sidebar__addChannel" />
                </div>

                <div className="sidebar__channelsList">
                        {channels.map(({ id, channel }) => (
                            <SidebarChannel 
                            key={id}
                            id={id}
                            channelName={channel.channelName} />
                        ))}
                    
                    
                </div>

                <div className="sidebar__voice">
                    <SignalCellularAltIcon
                        className="sidebar__voiceIcon"
                        fontSize="large"
                    />
                    <div className="sidebar__voiceInfo">
                        <h3>Voice Connected</h3>
                        <p>Stream</p>
                    </div>

                    <div className="sidebar__voiceIcons">
                        <InfoOutlinedIcon />
                        <CallIcon />
                    </div>

                    <div className="sidebar__videoCall">
                        <Link to ="/video-group-call">
                            <VideoCallIcon />
                        </Link>
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
                        <ExitToAppIcon onClick = {() => auth.signOut()}/>
                    </div>
                    
                </div>

            </div>

            

        </div>
    </div>

        
    )
}

export default Sidebar
