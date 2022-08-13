import { getGreeting, getBadge } from '../support/app.po';

describe('react-express', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Section One');
  });
  it('should display Connected to api!', () => {
    // Function helper example, see `../support/app.po.ts` file
    getBadge().contains('Connected to api!');
  });
});


