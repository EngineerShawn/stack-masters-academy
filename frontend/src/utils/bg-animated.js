import React, { useEffect } from 'react';
import '../styles/global.scss'; // assuming SCSS is compiled to CSS

const InteractiveBubble = () => {
    useEffect(() => {
        const interBubble = document.querySelector('.interactive');
        let curX = 0;
        let curY = 0;
        let tgX = 0;
        let tgY = 0;

        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            requestAnimationFrame(move);
        };

        const handleMouseMove = (event) => {
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <div className="interactive"></div>;
};

export default InteractiveBubble;
