import { render, screen } from '@testing-library/react';
import Button from '.';

describe('<Button />', () => {
  test('renders correctly', () => {
    render(<Button label="Button" />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('Button');
  });
});
