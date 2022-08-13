import { getGreeting, getBadge, getH2 } from '../support/app.po';

describe('react-express', () => {
  beforeEach(() => cy.visit('/'));

  it('should display Section One', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.login('my-email@something.com', 'myPassword');

    // Function helper example, see `../support/app.po.ts` file
    getGreeting().contains('Section One');
  });
  it('should display Connected to api!', () => {
    // Function helper example, see `../support/app.po.ts` file
    getBadge().contains('Connected to api!');
  });
  it('should display SafeFrame Test One and Section Title', () => {
    ['SafeFrame Test One', 'Section Title', 'Section Two'].forEach((e) => {
      getGreeting().contains(e);
    });
  });
  it('should display H2s', () => {
    ['Welcome to DFormik!'].forEach((e) => {
      getH2().contains(e);
    });
  });
});
