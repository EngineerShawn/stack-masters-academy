import React from 'react';
import InteractiveBubble from '../utils/bg-animated';

const Background = () => {



    return (
        <div>
            <div className="text-container">
                Stack Masters Academy
            </div>
            <div className="gradient-bg">
                {/* SVG and gradient divs */}
                <svg xmlns="http://www.w3.org/2000/svg">
                    {/* SVG content */}
                </svg>
                <div className="gradients-container">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <InteractiveBubble />
                </div>
            </div>
        </div>
    )
};


export default Background;