import { render, screen } from '../utils/test';
import App from '.';

test('renders learn react link', () => {
  render(<App />);
  const heading = screen.getByRole('heading');
  expect(heading).toHaveTextContent(/home page/i);
});
