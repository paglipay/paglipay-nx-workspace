import { render } from '@testing-library/react';

import DFormik from './dformik';

describe('DFormik', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DFormik />);
    expect(baseElement).toBeTruthy();
  });
});
