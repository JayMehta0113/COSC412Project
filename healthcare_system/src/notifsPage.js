import React from "react";

const NotifsPage = () => {
    return (
        <>
            <div className="navbar">
                <img src="Logo.png" className="Logo" />
                <ul>
                    <li><a href="LandingPage.html">Home</a></li>
                    <li><a href="#">Appointments</a></li>
                    <li><a href="notifsPage.html">Notifications</a></li>
                    <li><a href="#">Messages</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Settings</a></li>
                </ul>
            </div>
            <div className="container">
                <div className="app">
                    <div className="header">
                        <h2><span className="title">Notifications</span> <span className="unread-notification-number">0</span></h2>
                        <p>Mark all as read</p>
                    </div>
                    <div className="body">
                        <div className="notification unreaded"></div>
                        <div className="notification unreaded"></div>
                        <div className="notification unreaded"></div>
                        <div className="notification readed private-message"></div>
                        <div className="notification readed picture"></div>
                        <div className="notification readed"></div>
                        <div className="notification readed"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotifsPage;