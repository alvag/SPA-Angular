import { SPAAngularPage } from './app.po';

describe('spa-angular App', () => {
  let page: SPAAngularPage;

  beforeEach(() => {
    page = new SPAAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
