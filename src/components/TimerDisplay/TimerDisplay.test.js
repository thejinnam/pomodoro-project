import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimerDisplay from './TimerDisplay';

const mockProps = {
  timeLeft: '25:00',
  percentage: 50,
  isActive: false,
  setIsActive: jest.fn(),
  buttonText: 'START',
  setButtonText: jest.fn(),
  themeSettings: {
    color: '#F87070',
    font: 'Arial',
  },
};

describe('TimerDisplay component', () => {
  it('renders correctly with the provided timeLeft and percentage', () => {
    render(<TimerDisplay {...mockProps} />);

    // timeLeft text is displayed
    expect(screen.getByText(mockProps.timeLeft)).toBeInTheDocument();

    // button with the start text
    expect(screen.getByText(mockProps.buttonText)).toBeInTheDocument();
  });

  it('handles button click to start/pause the timer', () => {
    render(<TimerDisplay {...mockProps} />);

    const button = screen.getByText(mockProps.buttonText);

    fireEvent.click(button);

    expect(mockProps.setIsActive).toHaveBeenCalledWith(true);
    expect(mockProps.setButtonText).toHaveBeenCalledWith('PAUSE');
  });
});
