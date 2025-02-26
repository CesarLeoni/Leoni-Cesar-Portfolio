import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SnowEffect = () => {
    const snowContainerRef = useRef(null);

    useEffect(() => {
        const snowContainer = snowContainerRef.current;
        if (!snowContainer) return; // ✅ Prevents running on undefined ref

        const createSnowflake = () => {
            if (!snowContainer) return; // ✅ Ensures the container is still mounted
            const snowflake = document.createElement('div');
            snowflake.classList.add('snowflake');

            // Random position and styling
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Random size
            snowflake.style.opacity = Math.random() * 0.5 + 0.5; // Random opacity

            // Add a snowflake symbol
            const symbols = ['❄', '❆', '✻', '✲'];
            snowflake.textContent = symbols[Math.floor(Math.random() * symbols.length)];

            // Append to the container
            snowContainer.appendChild(snowflake);

            // Animate with GSAP
            gsap.fromTo(
                snowflake,
                { y: -50, opacity: snowflake.style.opacity },
                {
                    y: '100vh',
                    x: `+=${Math.random() * 50 - 25}`, // Slight horizontal drift
                    opacity: 0,
                    duration: Math.random() * 10 + 5, // 5-15 seconds for slower fall
                    ease: 'power1.out',
                    onComplete: () => snowflake.remove(), // Remove after animation
                }
            );
        };

        // Generate snowflakes continuously
        const interval = setInterval(createSnowflake, 300); // New snowflake every 300ms

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return <div ref={snowContainerRef} className="fixed inset-0 pointer-events-none"></div>;
};

export default SnowEffect;
