import { render } from '@testing-library/react';

import SharedCookies from './shared-cookies';

describe('SharedCookies', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedCookies />);
    expect(baseElement).toBeTruthy();
  });
});
