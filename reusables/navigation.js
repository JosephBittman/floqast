const environments = require('./../meta/environments');
const homepage = require('./../page_objects/homepage');
const contactUs = require('./../page_objects/contactUs');

module.exports = new function () {
  const self = this;

  this.waitForContactUsPageToLoad = async () => browser.wait(async () => contactUs.iframes.form.isPresent(), global.defaultWaitTimeout, 'waiting for contact us page to load');

  this.openContactUsFormThruHeader = async ()=> {
    // if (await homepage.???r.banner.accept.isPresent()) {
    //   await browser.sleep(3000);
    //   console.log('banner present');
    //   await homepage.footer.banner.accept.click()};
    await homepage.header.contactUs.click();
    return self.waitForContactUsPageToLoad();
  };

  this.waitForHomepageToLoad = async () => browser.wait(async () => homepage.hero.isPresent(), global.defaultWaitTimeout, 'waiting for homepage to load');

  this.openHomepageByURL = async () => {
    await browser.get(environments.web);
    return self.waitForHomepageToLoad();
  };
}();
