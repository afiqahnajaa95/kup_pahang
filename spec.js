describe('Protractor Demo App', function() {
  it('should have a title', function() {
    browser.get('https://kup-pahang-7ce04.firebaseapp.com/');
    element(by.css("login.email")).sendKeys("afiqahnajaa.95@gmail.com");
    element(by.css("login.password")).sendKeys("abc123");
    element(by.css("login.email"),("login.password")).getText().then(function (text) {
      console.log(text);
    });
  });
});
