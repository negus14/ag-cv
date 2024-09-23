// src/components/Introduction.js
import React from "react";
import './Introduction.css'; // Import the CSS file for styling

const Introduction = () => {
    return (
        <div className="introduction-container"> 
            <div className="introduction-text">
                <div>
                    <h1>
                        Welcome
                    </h1>
                </div>
                {/* <div>
                    <h1>
                        እንኳን ብደሓን ወደ ድሕረ ገጻ።
                    </h1>
                </div> */}
            </div>
        </div>
    );
}

export default Introduction;