import { render, screen } from '@testing-library/react';
import About from '.';

describe('<About />', () => {
  test('renders correctly', () => {
    render(<About />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent(/about page/i);
  });
});
