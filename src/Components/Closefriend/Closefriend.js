import React from 'react';
import "./Closefriend.css"

const Closefriend = (props) => {
    return (
        <li className="sidebarFriend">
        <img className="sidebarFriendImg" src={props.user.profilePicture} alt="" />
        <span className="sidebarFriendName">{props.user.username}</span>
    </li>
    );
};

export default Closefriend;