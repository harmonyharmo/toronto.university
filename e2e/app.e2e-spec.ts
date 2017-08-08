import { TorontoUniversityPage } from './app.po';

describe('toronto-university App', () => {
  let page: TorontoUniversityPage;

  beforeEach(() => {
    page = new TorontoUniversityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
