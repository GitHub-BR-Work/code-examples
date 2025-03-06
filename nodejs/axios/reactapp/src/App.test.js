import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders input field', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(/Enter your name/i);
  expect(inputElement).toBeInTheDocument();
});
