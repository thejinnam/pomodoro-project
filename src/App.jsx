import { useState, useEffect } from 'react';
import SettingsModal from './components/SettingsModal';
import TimerDisplay from './components/TimerDisplay';
import ModeHeader from './components/ModeHeader';
import './App.css';

function App() {
  const [timerSettings, setTimerSettings] = useState({
    mode: 'pomo', // options: 'pomo', 'short', 'long'
    lengths: {
      pomo: 0.1 * 60, // lengths in seconds, customizable by the user
      short: 0.1 * 60,
      long: 0.1 * 60,
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

    // Reset the timer's activity state and button text
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
    <>
      <h1>Pomodoro</h1>
      <ModeHeader
        timerSettings={timerSettings}
        handleModeChange={handleModeChange}
        themeSettings={themeSettings}
      />
      <TimerDisplay
        timeLeft={formatTimeLeft(secondsLeft)}
        percentage={calcPercentage()}
        isActive={isActive}
        setIsActive={setIsActive}
        buttonText={buttonText}
        setButtonText={setButtonText}
        themeSettings={themeSettings}
      />
      <SettingsModal
        timerSettings={timerSettings}
        setTimerSettings={setTimerSettings}
        themeSettings={themeSettings}
        setThemeSettings={setThemeSettings}
      />
    </>
  );
}

export default App;
