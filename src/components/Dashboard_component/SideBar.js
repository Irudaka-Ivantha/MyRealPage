import React, { useState } from 'react';
import './SideBar.css';
import dashboardIcon from '../../images/dashboard1.png';
import leadsIcon from '../../images/li_contact-2.png';
import marketingIcon from '../../images/marketing.png';
import listings from '../../images/list.png';
import billingIcon from '../../images/Outline.png';
import newsIcon from '../../images/newspaper.png';
import supportIcon from '../../images/support.png';
import settings from '../../images/li_settings.png';

const SideBar = () => {
    const [active, setActive] = useState("#dashboard");

    const handleClick = (id) => {
        setActive(id);
    };

    return (
        <div className="sidebar">
            <img src="/Frame 14795.png" alt="myRealPage logo" className="image" />
            <ul className="main-items">
                <li className={active === "#dashboard" ? "active" : ""}>
                    <a href="#dashboard" onClick={() => handleClick("#dashboard")}>
                        <img src={dashboardIcon} alt="Dashboard Icon" className="icon" /> Dashboard
                    </a>
                </li>
                <li className={active === "#leads" ? "active" : ""}>
                    <a href="#leads" onClick={() => handleClick("#leads")}>
                        <img src={leadsIcon} alt="Leads Icon" className="icon" /> Leads
                    </a>
                </li>
                <li className={active === "#marketing" ? "active" : ""}>
                    <a href="#marketing" onClick={() => handleClick("#marketing")}>
                        <img src={marketingIcon} alt="Marketing Icon" className="icon" /> Marketing
                    </a>
                </li>
                <li className={active === "#listings" ? "active" : ""}>
                    <a href="#listings" onClick={() => handleClick("#listings")}>
                        <img src={listings} alt="listing Icon" className="icon" /> Listings
                    </a>
                </li>
                <li className={active === "#billing" ? "active" : ""}>
                    <a href="#billing" onClick={() => handleClick("#billing")}>
                        <img src={billingIcon} alt="Billing Icon" className="icon" /> Billing
                    </a>
                </li>
                <li><hr className="bottomline" /></li>
                <li className={active === "#news" ? "active" : ""}>
                    <a href="#news" onClick={() => handleClick("#news")}>
                        <img src={newsIcon} alt="News Icon" className="icon" /> News
                    </a>
                </li>
            </ul>
            <ul className="bottom-items">
                <li><hr className="bottomline" /></li>
                <li className={active === "#support" ? "active" : ""}>
                    <a href="#support" onClick={() => handleClick("#support")}>
                        <img src={supportIcon} alt="Support Icon" className="icon" /> Support
                    </a>
                </li>
                <li className={active === "#settings" ? "active" : ""}>
                    <a href="#settings" onClick={() => handleClick("#settings")}>
                        <img src={settings} alt="Settings Icon" className="icon" /> Settings
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SideBar;
