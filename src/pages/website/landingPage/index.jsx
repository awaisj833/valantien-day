import React, { useState, useEffect, useRef } from "react";
import HeroSection from "./HeroSection";

const LandingPage = () => {
    const [clickCount, setClickCount] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const shapes = ['🌹', '❤️', '🌸', '🍁']; 

        const createFallingItem = (startY) => {
            const item = document.createElement('div');
            item.classList.add('falling-item');

            const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
            item.innerText = randomShape;

            item.style.left = Math.random() * 100 + 'vw';
            item.style.opacity = Math.random() * 2; // Lighter opacity
            
            if (startY) {
                item.style.top = startY;
            }

            const size = Math.random() * 20 + 20; 
            item.style.fontSize = size + 'px';

            item.style.animationDuration = Math.random() * 3 + 2 + 's';

            container.appendChild(item);

            setTimeout(() => {
                item.remove();
            }, 6000);
        };

        // Populate screen immediately
        for(let i = 0; i < 15; i++) {
            createFallingItem((Math.random() * 100 - 20) + 'vh');
        }

        const interval = setInterval(() => createFallingItem(), 300);

        return () => clearInterval(interval);
    }, []);

    const noPhrases = [
        { id: 1, text: "Nice Try! But Clicking won't Help You! 😈😈" },
        { id: 2, text: "Still trying to click 'No'? That's Adorable! 🥰🥰" },
        { id: 3, text: "Really? You're gonna Make me Work for this? 😏😏" },
        { id: 4, text: "You're Persistent, I'll Give you that! But the Answer is YES! 😍😍" }
    ];

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isAccepted, setIsAccepted] = useState(false);

    useEffect(() => {
        if (clickCount > 0 && clickCount <= 4) {
            // Reset animation
            setIsPopupOpen(false);
            // Small delay to allow CSS transition to reset (or at least trigger re-flow)
            const timer = setTimeout(() => {
                setIsPopupOpen(true);
            }, 100);
            return () => clearTimeout(timer);
        } else {
            setIsPopupOpen(false);
        }
    }, [clickCount]);

    const handleNoClick = () => {
        setClickCount(prev => prev + 1);
    };

    const handleYesClick = () => {
        setIsAccepted(true);
    };

    return (
        <div className="bg-[#F0E5DB] min-h-[100vh] relative overflow-hidden flex flex-col items-center justify-center pb-24 md:pb-0">
            {/* Falling Petals Container */}
            <div ref={containerRef} className="falling-petals-container" />

            <HeroSection 
                clickCount={clickCount} 
                onNoClick={handleNoClick} 
                onYesClick={handleYesClick}
                isAccepted={isAccepted}
            />
            
            {/* Global Pop-up Messages */}
            <div className={`popup-animate ${isPopupOpen && !isAccepted ? 'open' : ''} flex justify-center items-end pb-8 md:pb-16 pointer-events-none`}>
                <div className="bg-white/95 backdrop-blur-md border-2 border-red-400 text-red-600 px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-2xl font-semibold text-base md:text-xl text-center w-[95%] md:w-auto md:max-w-[700px] shadow-red-200">
                    {clickCount > 0 ? noPhrases[Math.min(clickCount, 4) - 1]?.text : ""}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
