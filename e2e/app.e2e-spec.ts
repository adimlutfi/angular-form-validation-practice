import { AngularFormValidationPracticePage } from './app.po';

describe('angular-form-validation-practice App', function() {
  let page: AngularFormValidationPracticePage;

  beforeEach(() => {
    page = new AngularFormValidationPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
