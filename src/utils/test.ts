import { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

// eslint-disable-next-line default-param-last
const customRender = (ui: ReactElement, route = '/', options?: RenderOptions) => {
  window.history.pushState({}, 'Page', route);
  return render(ui, { wrapper: Router, ...options });
};

export * from '@testing-library/react';

export { customRender as render, userEvent };
