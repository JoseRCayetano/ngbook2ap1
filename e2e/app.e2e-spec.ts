import { Ngbook2ap1Page } from './app.po';

describe('ngbook2ap1 App', () => {
  let page: Ngbook2ap1Page;

  beforeEach(() => {
    page = new Ngbook2ap1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
