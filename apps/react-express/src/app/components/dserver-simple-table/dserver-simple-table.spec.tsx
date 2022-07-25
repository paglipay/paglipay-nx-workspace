import { render } from '@testing-library/react';

import DServerSimpleTable from './dserver-simple-table';

describe('DServerSimpleTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DServerSimpleTable />);
    expect(baseElement).toBeTruthy();
  });
});
