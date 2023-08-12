import { render, screen } from '@testing-library/react';
import App from './index';

test('renders learn react link', () => {
  render(<App />);
  const title = screen.getByText(/AI-Assist/i);
  expect(title).toBeInTheDocument();
});
