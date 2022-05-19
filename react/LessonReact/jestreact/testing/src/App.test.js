import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />)
  const hover = screen.getByText(/We are ending react course/i)
  const button = screen.getByRole('button')
  const input = screen.getByPlaceholderText(/Type your congratulations/i)

  expect(hover).toBeInTheDocument()
  expect(button).toBeInTheDocument()
  expect(input).toBeInTheDocument()
});
