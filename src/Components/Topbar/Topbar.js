import React from 'react';
import "./Topbar.css"
import { Search} from '@mui/icons-material';
import { Person,Chat,Notifications} from '@mui/icons-material';

const Topbar = () => {
    return (
        <div>
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <span className='logo'>Social_1987</span>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search className='searchIcon'></Search>
                        <input placeholder='Search for post/video' className="searchInput" />
                    </div>
                </div>
                <div className="topbarRight">
                    <div className="topbarLinks">
                        <span className="topbarLink">Homepage</span>
                        <span className="topbarLink">Timeline</span>
                    </div>
                    <div className="topbarIcons">
                        <div className="topbarIconItem">
                            <Person></Person>
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Chat></Chat>
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIconItem">
                            <Notifications></Notifications>
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <img src="/Assets/Person/1.jpeg" alt="" className="topbarImg" />
                </div>
            </div>
        </div>
    );
};

export default Topbar;