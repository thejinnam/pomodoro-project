import React, { useState, useEffect } from 'react';
import SettingsModal from './components/SettingsModal/SettingsModal';
import TimerDisplay from './components/TimerDisplay/TimerDisplay';
import ModeHeader from './components/ModeHeader/ModeHeader';
import './App.css';

function App() {
  const [timerSettings, setTimerSettings] = useState({
    mode: 'pomo', 
    lengths: {
      pomo: 25 * 60,
      short: 5 * 60,
      long: 15 * 60,
    },
  });
  const [themeSettings, setThemeSettings] = useState({
    font: 'Kumbh Sans, sans-serif',
    color: '#F87070',
  });

  const [buttonText, setButtonText] = useState('START');
  const [secondsLeft, setSecondsLeft] = useState(timerSettings.lengths['pomo']);
  const [isActive, setIsActive] = useState(false);

  // Update the timer when the active timer mode changes or lengths change
  useEffect(() => {
    setSecondsLeft(timerSettings.lengths[timerSettings.mode]);
  }, [timerSettings]);

  useEffect(() => {
    if (isActive && secondsLeft > 0) {
      const interval = setInterval(
        () => setSecondsLeft((prev) => prev - 1),
        1000
      );
      return () => clearInterval(interval);
    }
    if (secondsLeft === 0) {
      setIsActive(false);
      setButtonText(
        timerSettings.mode === 'pomo' ? 'Take a break!' : 'Back to studying!'
      );
    }
  }, [isActive, secondsLeft, timerSettings.mode]);

  const handleModeChange = (event) => {
    const newMode = event.target.id; // Get the selected mode (pomo, short, or long)

    setTimerSettings((prevSettings) => ({
      ...prevSettings,
      mode: newMode,
    }));

    // Update secondsLeft based on the selected mode's length
    switch (newMode) {
      case 'pomo':
        setSecondsLeft(timerSettings.lengths.pomo);
        break;
      case 'short':
        setSecondsLeft(timerSettings.lengths.short);
        break;
      case 'long':
        setSecondsLeft(timerSettings.lengths.long);
        break;
      default:
        break;
    }

    setIsActive(false);
    setButtonText('START');
  };

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : '0' + (seconds % 60)
    }`;
  };

  const calcPercentage = () => {
    return (secondsLeft / timerSettings.lengths[timerSettings.mode]) * 100;
  };

  return (
    <div
      className="min-h-screen bg-[#1E213F] flex flex-col items-center py-8 px-6"
      style={{ fontFamily: themeSettings.font }}
    >
      <h1 className="text-[#D7E0FF] text-3xl font-bold mb-12">Pomodoro</h1>

      <div className="w-full max-w-xl flex flex-col items-center gap-12">
        <ModeHeader
          timerSettings={timerSettings}
          handleModeChange={handleModeChange}
          themeSettings={themeSettings}
        />

        <div className="w-full rounded-3xl p-4 md:p-8 flex flex-col items-center">
          <TimerDisplay
            timeLeft={formatTimeLeft(secondsLeft)}
            percentage={calcPercentage()}
            isActive={isActive}
            setIsActive={setIsActive}
            buttonText={buttonText}
            setButtonText={setButtonText}
            themeSettings={themeSettings}
          />
        </div>
      </div>

      <div className="mt-12">
        <SettingsModal
          timerSettings={timerSettings}
          setTimerSettings={setTimerSettings}
          themeSettings={themeSettings}
          setThemeSettings={setThemeSettings}
        />
      </div>
    </div>
  );
}

export default App;
