import React from 'react';

const ModeHeader = ({ timerSettings, handleModeChange, themeSettings }) => {
  return (
    <>
      <form className="flex items-center justify-center p-2 rounded-full bg-[#161932] w-full max-w-md">
        <div className="relative flex items-center gap-2 p-2 rounded-full bg-[#161932]">
          {[
            { id: 'pomo', label: 'pomodoro' },
            { id: 'short', label: 'short break' },
            { id: 'long', label: 'long break' },
          ].map((mode) => (
            <div key={mode.id} className="relative">
              <input
                type="radio"
                id={mode.id}
                name="mode"
                checked={timerSettings.mode === mode.id}
                onChange={handleModeChange}
                className="hidden peer"
              />
              <label
                htmlFor={mode.id}
                style={{
                  fontFamily: themeSettings.font,
                  backgroundColor:
                    timerSettings.mode === mode.id
                      ? themeSettings.color
                      : 'transparent',
                }}
                className={`
                px-6 py-4 rounded-full cursor-pointer text-sm font-bold transition-all duration-300
                ${
                  timerSettings.mode === mode.id
                    ? 'text-[#161932]'
                    : 'text-gray-400 hover:text-white'
                }
              `}
              >
                {mode.label}
              </label>
            </div>
          ))}
        </div>
      </form>
    </>
  );
};

export default ModeHeader;
