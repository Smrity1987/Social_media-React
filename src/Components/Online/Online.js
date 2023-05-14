import React from 'react';
import "./Online.css"

const Online = (props) => {
  
    return (
        <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
            <img src={props.user.profilePicture} alt="" className="rightbarProfileImg" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername">{props.user.username}</span>
    </li>
    );
};

export default Online;