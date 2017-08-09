import { RxObservablePage } from './app.po';

describe('rx-observable App', () => {
  let page: RxObservablePage;

  beforeEach(() => {
    page = new RxObservablePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
