import { NotifyAngular2Page } from './app.po';

describe('notify-angular2 App', () => {
  let page: NotifyAngular2Page;

  beforeEach(() => {
    page = new NotifyAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
