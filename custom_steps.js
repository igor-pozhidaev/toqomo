const c = require('./constant.js');

let I;

module.exports = {
  _init() {
    I = actor();
  },

  checkElement(locator){
    I.waitForElement(locator, c.TIMEOUT)
    I.scrollElementIntoView(locator);
    I.waitForVisible(locator, c.TIMEOUT)
  },

  click(locator) {
    this.checkElement(locator);
    I.click(locator);
  },

  fillField(locator, data){
    this.checkElement(locator);
    I.waitForEnabled(locator, c.TIMEOUT);
    I.fillField(locator, data);
  },

  checkErrorMessage(message){
    this.checkElement(`//div[@class="notification error"]//div[.="${message}"]`);
  }

};
