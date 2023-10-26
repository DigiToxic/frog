import React, { useState, useEffect, useRef } from "react";

const isPageRefresh = () => {
  if (typeof window !== "undefined" && window.performance) {
    const navigationEntries = window.performance.getEntriesByType("navigation");
    if (navigationEntries.length > 0) {
      const navigationEntry = navigationEntries[0];
      return navigationEntry.type === "reload";
    }
  }
  return false;
};

const WelcomeOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [welcomeShown, setWelcomeShown] = useState(false);
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    let timerCompleted = false;

    const checkBothCompleted = () => {
      if (timerCompleted) {
        setFadeOut(true);
        setTimeout(() => {
          setLoading(false);
          setFadeOut(false);
          setFadeIn(true);
        }, 500);
      }
    };

    if (isPageRefresh()) {
      setWelcomeShown(true);
    } else {
      setTimeout(() => {
        timerCompleted = true;
        checkBothCompleted();
      }, 0);
    }
  }, []);

  useEffect(() => {
    if (!welcomeShown && !isOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isOpen, welcomeShown]);

  const audioRef = useRef(null);

  const handleClick = () => {
    setIsOpen(true);

    if (audioRef && audioRef.current) {
      audioRef.current.play();
    }
  };

  if (welcomeShown) {
    return null;
  }

  return (
    <>
      <audio ref={audioRef} src="/music/crazy_frog.mp3" preload="auto" />

      <div className={`overlay overlay-left ${isOpen ? "open" : ""}`}></div>
      <div className={`overlay overlay-right ${isOpen ? "open" : ""}`}></div>
      {loading ? (
        <div></div>
      ) : (
        !isOpen && (
          <div
            className={`welcome-text ${fadeIn ? "fadeIn" : ""}`}
            onClick={handleClick}
          >
            <div className="bg-[#738BBB] rounded-xl shadow-md shadow-[rgb(123,204,255)] hover:bg-[rgb(71,117,146)] hover:mt-2 hover:shadow-none">
              <p className="text-5xl py-2 px-5">Enter</p>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default WelcomeOverlay;
