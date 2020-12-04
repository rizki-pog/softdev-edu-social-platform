import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Link, Redirect } from 'react-router-dom';
import './AnnouncementDisplayHeader.css'

function AnnouncmentDisplayHeader() {

  
    
    return (
        < div className = 'chatHeader'>
            
            <div className="chatHeader__left">
                <h3>
                    <span className="chatHeader__hash">Announcements</span>
                            
                        
                </h3>
            </div>

            <div className="chatHeader__right">
                <Link to='announcement-login'>
                    <AddIcon/>
                </Link>
                
            </div>
        </div>
    )
}

export default AnnouncmentDisplayHeader
