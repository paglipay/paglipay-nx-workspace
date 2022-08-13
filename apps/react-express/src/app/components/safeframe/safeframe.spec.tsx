import { render } from '@testing-library/react';

import Safeframe from './safeframe';

describe('Safeframe', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Safeframe />);
    expect(baseElement).toBeTruthy();
  });
});
