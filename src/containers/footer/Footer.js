import React from "react";
import './Footer.css';

const Footer  = () => {
    return (
        <footer>
            Created by Abel
            <div>
                <img src={`${process.env.PUBLIC_URL}/logo512.png`} alt="Favicon" style={{ width: '72px', height: '72px', marginTop: '8px' }} />
            </div>
        </footer>
    );
}

export default Footer;