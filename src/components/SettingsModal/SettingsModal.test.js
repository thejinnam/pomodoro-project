import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SettingsModal from './SettingsModal';

describe('SettingsModal Component', () => {
  const mockSetTimerSettings = jest.fn();
  const mockSetThemeSettings = jest.fn();

  const initialTimerSettings = {
    lengths: {
      pomo: 25 * 60,
      short: 5 * 60,
      long: 15 * 60,
    },
  };

  const initialThemeSettings = {
    font: 'Kumbh Sans, sans-serif',
    color: '#F87070',
  };

  beforeEach(() => {
    render(
      <SettingsModal
        timerSettings={initialTimerSettings}
        setTimerSettings={mockSetTimerSettings}
        themeSettings={initialThemeSettings}
        setThemeSettings={mockSetThemeSettings}
      />
    );
  });

  test('renders the modal and toggles it open', () => {
    const openButton = screen.getByRole('button', { name: /open settings/i });
    fireEvent.click(openButton);

    expect(screen.getByText(/Settings/i)).toBeInTheDocument();
  });

  //test: updates local settings on input change
  //test: applies settings and calls the appropriate callback functions
});
