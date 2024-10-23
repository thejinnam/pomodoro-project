import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/SettingsModal/SettingsModal', () => () => (
  <div>Settings Modal</div>
));
jest.mock('./components/TimerDisplay/TimerDisplay', () => () => (
  <div>Timer Display</div>
));
jest.mock('./components/ModeHeader/ModeHeader', () => () => (
  <div>Mode Header</div>
));

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('renders the app components', () => {
    expect(screen.getByText(/Pomodoro/i)).toBeInTheDocument();
    expect(screen.getByText(/Settings Modal/i)).toBeInTheDocument();
    expect(screen.getByText(/Timer Display/i)).toBeInTheDocument();
    expect(screen.getByText(/Mode Header/i)).toBeInTheDocument();
  });
});
