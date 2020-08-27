import React, {useState} from 'react';
import colors from '../constants/theme';

const Navbar = ({setActivePage}) => {

    const [activeTab, setActiveTab] = useState("homeTab");

    const toggleClass = (element) => {
        setActiveTab(element);
        setActivePage(element);
    }

    return (
        <div className="navBar" style={{backgroundColor: colors["mint cream"]}}>
            <ul id="navList">
                <li key="home">
                    <span id="homeTab"
                        className={activeTab === 'homeTab' ? 'activeTab' : null}
                        onClick={e => toggleClass(e.target.id)}>home</span>
                </li>
                <li>
                    <span id="projectsTab"
                        className={activeTab === 'projectsTab' ? 'activeTab' : null}
                        onClick={e => toggleClass(e.target.id)}>projects</span>
                </li>
                <li>
                    <span id="contactTab"
                        className={activeTab === 'contactTab' ? 'activeTab' : null}
                        onClick={e => toggleClass(e.target.id)}>contact</span>
                </li>
                <li>
                    <span id="aboutTab"
                        className={activeTab === 'aboutTab' ? 'activeTab' : null}
                        onClick={e => toggleClass(e.target.id)}>about</span>
                </li>
            </ul>
        </div>
    )   
}



export default Navbar;