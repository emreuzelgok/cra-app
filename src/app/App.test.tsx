import { render, screen, waitFor } from '../utils/test';
import App from '.';

test('renders learn react link', async () => {
  render(<App />);
  await waitFor(() => expect(screen.getByRole('heading')).toHaveTextContent(/home page/i));
});
