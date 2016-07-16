import { ModalDemoAppPage } from './app.po';

describe('modal-demo-app App', function() {
  let page: ModalDemoAppPage;

  beforeEach(() => {
    page = new ModalDemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
