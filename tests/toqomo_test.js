const data = require('../test_data.js');
const c = require('../constant.js');

Feature('Toqomo');

Before((I, CS) => {
  I.amOnPage('/auth/sign-in');
  I.waitForInvisible('//div[@class="loader-screen-wrapper"]', c.TIMEOUT);
});

Scenario('User can LogIn', (I, CS) => {
  CS.fillField('//input[@name="login"]', data.USER.PHONE_NUMBER);
  CS.fillField('//input[@name="password"]', data.USER.PWD);
  CS.click('//button[.=" Войти "]');
  I.waitInUrl('/companies', c.TIMEOUT);
  CS.checkElement(`//a[@class="dark name" and contains(text(),"${data.USER.FIRST_NAME}")]`)
});

Scenario('User can\'t LogIn with wrong password', (I, CS) => {
  CS.fillField('//input[@name="login"]', data.USER.PHONE_NUMBER);
  CS.fillField('//input[@name="password"]', 'ytrewq');
  CS.click('//button[.=" Войти "]');
  CS.checkErrorMessage('[20] Неправильный Login или пароль.. ');
});

Scenario('SignUp - User can\'t use phone number twice', (I, CS) => {
  CS.click('//a[.=" Зарегистрироваться в JShop "]');
  CS.fillField('//input[@name="firstName"]', data.USER.FIRST_NAME);
  CS.fillField('//input[@name="lastName"]', data.USER.FIRST_NAME);
  CS.fillField('//input[@name="phone"]', data.USER.PHONE_NUMBER);
  CS.click('//button[.=" Далее "]');
  CS.checkErrorMessage('[10] phone already registered. ');
});

Scenario('Failed LogIn scenario to save error in logs', (I, CS) => {
  CS.fillField('//input[@name="login"]', data.USER.PHONE_NUMBER);
  CS.fillField('//input[@name="password"]', 'ytrewq');
  CS.click('//button[.=" Войти "]');
  I.waitInUrl('/companies', c.TIMEOUT);
});
