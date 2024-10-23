import React from 'react';
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const TimerDisplay = ({
  timeLeft,
  percentage,
  isActive,
  setIsActive,
  buttonText,
  setButtonText,
  themeSettings,
}) => {
  const handleClick = () => {
    setIsActive(!isActive);
    setButtonText(
      buttonText === 'START' || buttonText === 'RESUME' ? 'PAUSE' : 'RESUME'
    );
  };

  return (
    <div className="max-w-l mx-auto p-4">
      <div
        className="flex flex-col items-center justify-center bg-gray-900 rounded-full shadow-lg p-6"
        style={{ fontFamily: themeSettings.font }}
      >
        <CircularProgressbarWithChildren
          value={percentage}
          text={timeLeft}
          strokeWidth={10}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: themeSettings.color || `#F87070`,
            textColor: '#D7E0FF',
            textSize: '12px',
            fontFamily: themeSettings.font,
            trailColor: 'rgba(255, 255, 255, 0.2)',
          })}
        >
          <button
            className="mt-12 py-2 px-4 rounded-full bg-accent-color text-white font-semibold transition duration-300 hover:bg-accent-dark"
            onClick={handleClick}
          >
            {buttonText}
          </button>
        </CircularProgressbarWithChildren>
      </div>
    </div>
  );
};

export default TimerDisplay;
