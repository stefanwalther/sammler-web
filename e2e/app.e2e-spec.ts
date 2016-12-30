import { SammlerWebPage } from './app.po';

describe('sammler-web App', function() {
  let page: SammlerWebPage;

  beforeEach(() => {
    page = new SammlerWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
