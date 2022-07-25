import { render } from '@testing-library/react';

import DTable from './dtable';

describe('DTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DTable />);
    expect(baseElement).toBeTruthy();
  });
});
