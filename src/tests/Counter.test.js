import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();});


test('should render initial count with value of 0', () => {
  const initialCount = screen.getByText(/0/i);
  expect(initialCount).toBeInTheDocument();});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByRole('button', { name: '+' });
  const count = screen.getByTestId('count');
  expect(count.textContent).toBe('0');
  userEvent.click(incrementButton);
  expect(count.textContent).toBe('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByRole('button', { name: '-' });
  const count = screen.getByTestId('count');
  expect(count.textContent).toBe('0');
  userEvent.click(decrementButton);
  expect(count.textContent).toBe('-1');
});
