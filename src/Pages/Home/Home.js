import React from 'react';
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Feed from '../../Components/Feed/Feed';
import Rightbar from '../../Components/Rightbar/Rightbar';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <div className="homeContainer">
                <Sidebar></Sidebar>
                <Feed></Feed>
                <Rightbar></Rightbar>
            </div>
        </div>
    );
};

export default Home;