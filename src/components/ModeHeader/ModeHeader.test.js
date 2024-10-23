import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import ModeHeader from './ModeHeader';

describe('ModeHeader Component', () => {
  const mockHandleModeChange = jest.fn();

  const mockTimerSettings = {
    mode: 'pomo',
  };

  const mockThemeSettings = {
    font: 'Kumbh Sans, sans-serif',
    color: '#F87070',
  };

  it('renders the correct radio buttons and labels', () => {
    render(
      <ModeHeader
        timerSettings={mockTimerSettings}
        handleModeChange={mockHandleModeChange}
        themeSettings={mockThemeSettings}
      />
    );

    expect(screen.getByLabelText(/pomodoro/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/short break/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/long break/i)).toBeInTheDocument();
  });

  it('calls handleModeChange when a different mode is selected', () => {
    render(
      <ModeHeader
        timerSettings={mockTimerSettings}
        handleModeChange={mockHandleModeChange}
        themeSettings={mockThemeSettings}
      />
    );

    const shortBreakLabel = screen.getByLabelText(/short break/i);
    fireEvent.click(shortBreakLabel);

    expect(mockHandleModeChange).toHaveBeenCalled();
  });
});
