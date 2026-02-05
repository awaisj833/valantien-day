import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HeroSection = ({ clickCount, onNoClick, onYesClick, isAccepted }) => {
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const yesBtnRef = useRef(null);
  const noBtnRef = useRef(null);

  const moveNoButton = () => {
    if (!yesBtnRef.current || !noBtnRef.current) return;

    const noRect = noBtnRef.current.getBoundingClientRect();
    const yesRect = yesBtnRef.current.getBoundingClientRect();

    let newX, newY;
    let overlap = true;
    let attempts = 0;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    while (overlap && attempts < 50) {
      attempts++;
      newX = Math.random() * (viewportWidth - noRect.width - 40) + 10;
      newY = Math.random() * (viewportHeight - noRect.height - 40) + 10;

      const proposedRect = {
        left: newX,
        top: newY,
        right: newX + noRect.width,
        bottom: newY + noRect.height
      };
      
      const isOverlappingYes = !(
        proposedRect.right < yesRect.left - 20 ||
        proposedRect.left > yesRect.right + 20 ||
        proposedRect.bottom < yesRect.top - 20 ||
        proposedRect.top > yesRect.bottom + 20
      );

      const popupRect = {
        left: (viewportWidth / 2) - 300,
        top: viewportHeight - 150,
        right: (viewportWidth / 2) + 300,
        bottom: viewportHeight
      };

      const isOverlappingPopup = !(
        proposedRect.right < popupRect.left - 20 ||
        proposedRect.left > popupRect.right + 20 ||
        proposedRect.bottom < popupRect.top - 20 ||
        proposedRect.top > popupRect.bottom + 20
      );
      
      if (!isOverlappingYes && !isOverlappingPopup) overlap = false;
    }

    setNoPosition({ x: newX, y: newY });
    onNoClick(); 
  };

  return (
    <div className="flex justify-center relative px-4 max-[425px]:px-0 z-10 w-full h-full items-center">
      <AnimatePresence mode="wait">
        {!isEnvelopeOpen ? (
          /* --- ENVELOPE VIEW --- */
          <motion.div
            key="envelope"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0, rotate: -10, transition: { duration: 0.4 } }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsEnvelopeOpen(true)}
            className="cursor-pointer flex flex-col items-center justify-center bg-red-400 w-[320px] h-[220px] md:w-[600px] md:h-[400px] rounded-lg shadow-2xl relative border-4 border-red-300"
          >
             <div className="relative z-10 flex flex-col items-center">
                 <div className="text-6xl md:text-8xl animate-bounce">❣</div>
                 <p className="text-white font-bold mt-4 uppercase tracking-widest text-sm md:text-2xl">Tap to Open</p>
             </div>
             <div className="absolute top-0 left-0 w-0 h-0 border-l-[160px] md:border-l-[300px] border-r-[160px] md:border-r-[300px] border-t-[120px] md:border-t-[220px] border-l-transparent border-r-transparent border-t-red-500 opacity-80" />
          </motion.div>
        ) : (
          /* --- REVEALED CARD VIEW --- */
          <motion.div
            key="card"
            initial={{ scale: 0, rotateY: 180, opacity: 0 }}
            animate={{ scale: 1, rotateY: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            className="relative max-w-3xl w-full"
          >
            {/* Background Layer */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-[30px] shadow-2xl border-4 border-white/50" />
            
            {/* Content Layer */}
            <div className="p-8 md:p-16 text-center relative z-10">
              {isAccepted ? (
                // Success View
                <div className="animate-fade-in">
                  <h1 className="text-4xl md:text-5xl font-fondamento text-red-600 mb-8 drop-shadow-sm font-bold max-[490px]:text-[28px]">
                    I knew it! 🎉
                  </h1>
                  
                  <div className="flex justify-center mb-8">
                    <div className="w-full max-w-md aspect-video bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden shadow-lg border-2 border-red-200">
                        <img 
                            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3R6bWJ5b2ExcjJ6eXJ6eXJ6eXJ6eXJ6eXJ6eXJ6eXJ6eXJ6eXJ/26BRv0ThflsKCqLxK/giphy.gif" 
                            alt="Celebration" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null; 
                                e.target.parentNode.innerHTML = '<span class="text-gray-400">Photo Coming Soon! 📸</span>'
                            }}
                        />
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-fondamento text-red-600 mb-4 font-bold leading-relaxed max-[490px]:text-[18px]">
                    Congratulations! You are now Officially <br/>
                    <span className="text-red-500">Abdullah's Valentine ❤️</span> <br/>
                    Forever and Always! 💑
                  </h2>
                  
                  <p className="text-lg md:text-xl text-gray-600 font-fondamento italic mt-6 max-[490px]:text-[13.5px]">
                    ( I mean, we both knew you'd say Yes eventually😉 )
                  </p>
                </div>
              ) : (
                // Question View
                <>
                  <h1 className="text-3xl md:text-4xl font-fondamento text-red-600 mb-4 md:mb-8 max-[490px]:text-[18px] drop-shadow-sm leading-tight">
                    Will You Be My Valentine? 💝
                  </h1>
                  <p className="text-lg md:text-2xl text-gray-700 font-fondamento mb-6 md max-[490px]:text-[16px]">
                    Choose Wisely...😏😏
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 mt-4 md:mt-8 relative min-h-[140px] sm:min-h-0">
                    <button 
                      ref={yesBtnRef}
                      onClick={() => (clickCount === 0 || clickCount >= 4) && onYesClick()}
                      className="bg-red-600 text-white px-8 md:px-12 py-3 md:py-4 text-lg max-[490px]:text-sm max-[490px]:px-2 max-[490px]:py-4 md:text-xl font-bold rounded-full hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/30 w-full sm:w-auto"
                    >
                      <span className={clickCount >= 4 ? "animate-pulse block" : ""}>
                        {clickCount >= 4 ? "Yes! 💕(Getting Warning...)" : "Yes! 💕"}
                      </span>
                    </button>
                    
                    {clickCount < 4 && (
                      <button
                        ref={noBtnRef}
                        onClick={clickCount === 0 ? moveNoButton : undefined}
                        onMouseEnter={clickCount > 0 ? moveNoButton : undefined}
                        onTouchStart={clickCount > 0 ? moveNoButton : undefined}
                        style={clickCount === 0 ? {} : { 
                          position: 'fixed', 
                          left: 0, 
                          top: 0,
                          transform: `translate(${noPosition.x}px, ${noPosition.y}px)`, 
                          transition: 'all 0.5s ease',
                          zIndex: 50 
                        }}
                        className={`bg-red-50 text-red-600 border-2 border-red-300 font-semibold rounded-full hover:bg-red-100 hover:border-red-600 shadow-md transition-all duration-300 ${
                          clickCount > 0 
                            ? 'px-6 py-2 text-base w-auto' 
                            : 'px-8 py-3 text-lg w-full'
                        } sm:w-auto md:px-10 md:py-4 md:text-xl`}
                      >
                        No 💔
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeroSection;
