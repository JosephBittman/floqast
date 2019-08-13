const navigation = require('./../../../reusables/navigation');
global.cucumber.setDefaultTimeout(180 * 1000);

Given(/I am on the contact us form/, async () => {
  await navigation.openHomepageByURL();
  return navigation.openContactUsFormThruHeader();
});
