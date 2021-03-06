import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('<Home />', () => {
  test('renders correctly', () => {
    render(<Home />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(/home page/i);
  });
});
