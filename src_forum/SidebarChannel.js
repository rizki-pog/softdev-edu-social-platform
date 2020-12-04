import React from 'react'
import { useDispatch } from "react-redux";
import { setChannelInfo } from './features/appSlice';
import "./SidebarChannel.css";
import book from './book.png'; 

function SidebarChannel({ id, channelName}) {
    const dispatch = useDispatch();

    return (
        <div className="sidebarChannel" onClick={() => dispatch
        (setChannelInfo({
            channelId: id, 
            channelName: channelName,
        }))}>
            <div>
                <span className="channel__icon">
                    <img src={book} alt="book"  width="20" />
                </span>
            </div>
            <div className="channel__name">
                <h4>
                    {channelName}
                </h4>
            </div>
        </div>
    );
}

export default SidebarChannel;