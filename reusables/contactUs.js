const contactUs  = require('./../page_objects/contactUs');

module.exports = new function () {
  const self = this;

  this.waitForPardotFormToExist = async () => browser.wait(() => contactUs.iframes.form.isPresent(), global.defaultWaitTimeout, 'waiting for pardot form iframe to exist');

  this.switchToPardotForm = async () => {
    await browser.switchTo().defaultContent();
    await self.waitForPardotFormToExist();
    return browser.switchTo().frame(contactUs.iframes.form.getWebElement());
  };

  this.fillOutFormAccordingToPayload = async (payload) => {
    await self.switchToPardotForm();
    await contactUs.firstName.sendKeys(payload.firstName);
    await contactUs.lastName.sendKeys(payload.lastName);
    await contactUs.company.sendKeys(payload.company);
    await contactUs.businessEmail.sendKeys(payload.businessEmail);
    await contactUs.phone.sendKeys(payload.phone);
    await contactUs.country.all(by.cssContainingText('option', payload.country)).get(0).click();
    await contactUs.zip.sendKeys(payload.zip);
    return contactUs.comments.sendKeys(payload.comments);
  };
}();
