import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <ul id="social-sidebar">
            <li>
                <a href="https://www.facebook.com/profile.php?id=100064569257170" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"><span>Facebook</span></a>
            </li>
            <li>
                <a href="https://www.instagram.com/sologatosblog/" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"><span>Instagram</span></a>
            </li>
            <li>
                <a href="https://www.youtube.com/@WineXD" className="fa fa-youtube" target="_blank" rel="noopener noreferrer"><span>Youtube</span></a>
            </li>
            <li>
                <a href="https://github.com/Millervillamizar" className="fa fa-github" target="_blank" rel="noopener noreferrer"><span>Github</span></a>
            </li>
        </ul>
    );
};

export default Sidebar;




