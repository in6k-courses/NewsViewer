import {NewsViewerClientPage} from "./app.po";

describe('news-viewer-client App', function() {
  let page: NewsViewerClientPage;

  beforeEach(() => {
    page = new NewsViewerClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
