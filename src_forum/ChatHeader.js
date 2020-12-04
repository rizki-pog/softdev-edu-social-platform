import React from 'react'
import "./ChatHeader.css";
import NotificationsIcon from '@material-ui/icons/Notifications';
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import book from './book.png'; 

function ChatHeader({ channelName }) {
    return (
        < div className = 'chatHeader'>
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">
                        <img src={book} alt="book"  className="book"  width="25" />
                    </span>
                        { channelName }
                </h3>
            </div>

            <div className="chatHeader__right">
                <NotificationsIcon />
                <EditLocationRoundedIcon />
                <PeopleAltRoundedIcon />

                <div className="chatHeader__search">
                    <input placeholder="Search" />
                    <SearchRoundedIcon />
                </div>
                    <HelpRoundedIcon />
            </div>
        </div>
    )
}

export default ChatHeader
