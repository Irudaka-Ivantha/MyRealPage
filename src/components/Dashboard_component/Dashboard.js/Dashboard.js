import React from 'react';
import './Dashboard.css';
import dashboardIcon from '../../../images/li_layout-dashboard1.png';
import notificationIcon from '../../../images/li_bell.png';
import dropdownIcon from '../../../images/li_chevron-down.png';

const Dashboard = () => (
    <div className="App">
        <div className="top-bar">
            <div className="welcome-section">
                <p className="welcome-message">Welcome,<b> Moni Roy</b></p>
                <h1 className="dashboard-title"><img src={dashboardIcon} alt="Dashboard Icon" className="icon" />Dashboard</h1>
            </div>
            <div className="profile-section">
                <div className="notification-button">
                    <img src={notificationIcon} alt="Notification Icon" />
                </div>
                <div className="profile-info">
                    <div className="dropdown-menu">
                        <button className="dropdown-button">
                            <img src="src\images\account.png" alt="Profile Icon" className="dropdown-ProfileIcon" /> Moni Roy
                            <img src={dropdownIcon} alt="Dropdown Icon" className="dropdown-icon" />
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Profile</a>
                            <a href="#">Settings</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Dashboard;
