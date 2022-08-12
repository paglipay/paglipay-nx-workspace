import { render } from '@testing-library/react';

import SafeframeCP from './safeframe-cp';

describe('SafeframeCP', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SafeframeCP />);
    expect(baseElement).toBeTruthy();
  });
});
