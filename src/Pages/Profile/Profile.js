import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Rightbar from '../../Components/Rightbar/Rightbar';
import "./Profiile.css"

const Profile = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div className="profile">
                <Sidebar></Sidebar>
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src="Assets/post/3.jpeg" alt="" />
                            <img className='profileUserImg' src="Assets/person/1.jpeg" alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Smrity Ahmed</h4>
                            <span className='profileInfoDesc'>Go,Grow,Glow!!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed></Feed>
                        <Rightbar profile></Rightbar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;