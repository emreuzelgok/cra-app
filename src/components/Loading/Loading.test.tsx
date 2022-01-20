import { render } from '@testing-library/react';
import Loading from '.';

describe('<Loading />', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<Loading />);
    expect(asFragment).toMatchSnapshot();
  });
});
