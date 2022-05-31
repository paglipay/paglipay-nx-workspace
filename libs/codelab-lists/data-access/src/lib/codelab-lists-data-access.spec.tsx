import { render } from '@testing-library/react';

import CodelabListsDataAccess from './codelab-lists-data-access';

describe('CodelabListsDataAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CodelabListsDataAccess />);
    expect(baseElement).toBeTruthy();
  });
});
