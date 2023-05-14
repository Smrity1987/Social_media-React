import React from 'react';
import "./Rightbar.css"
import { Users } from "../../dummyData"
import Online from '../Online/Online';

const Rightbar = ({profile}) => {
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="Assets/gift.png" alt="" className="birthdayImg" />
                    <span className="birthdayText">
                        <b>Sanjida Akter </b> and <b>3 other friends</b> have birthday today.
                    </span>
                </div>
                <img src="Assets/ad.png" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {
                        Users.map(user => <Online key={user.id} user={user}></Online>)
                    }
                </ul>
            </>
        )
    }
    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City :</span>
                        <span className="rightbarInfoValue">Dhaka</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From :</span>
                        <span className="rightbarInfoValue">Cumilla</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship :</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>
                </div>

                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="Assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mahfid Antor</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="Assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mohasina Bizly</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="Assets/person/4.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Sanzida Promi</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="Assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Rakib Ibn Ahsan</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="Assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mirza Nitu</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="Assets/person/7.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">ZR Joy</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="Assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mahfid Antor</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="Assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
                        <span className="rightbarFollowingName">Mahfid Antor</span>
                    </div>
                </div>
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar></ProfileRightbar> : <HomeRightbar></HomeRightbar>}
            </div>
        </div>
    );
};

export default Rightbar;