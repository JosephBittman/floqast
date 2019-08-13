const payloads = require('./../../../payloads/contactUs');
const contactUs = require('./../../../reusables/contactUs');
const contactUsPage = require('./../../../page_objects/contactUs');
const api = require('./../../../reusables/api');

When(/I submit the form with all required and all optional fields/, async () => {
  const payload = payloads.create();
  global.payloads = global.payloads || [];
  global.payloads.push(payload);
  return contactUs.fillOutFormAccordingToPayload(payload);
});

When(/I observe for (\d+) seconds/, async (seconds) => browser.sleep(seconds * 1000));

Then(/the database should have the submission with accurate information/, async () => {
  const submission = global.payloads[0];
  const dbRecord = await api.getContactUsSubmissionByEmail(submission.businessEmail);
  const proms = [];
  proms.push(expect(dbRecord.firstName).to.equal(submission.firstName));
  proms.push(expect(dbRecord.lastName).to.equal(submission.lastName));
  proms.push(expect(dbRecord.company).to.equal(submission.company));
  proms.push(expect(dbRecord.businessEmail).to.equal(submission.businessEmail));
  proms.push(expect(dbRecord.country).to.equal(submission.country));
  proms.push(expect(dbRecord.zip).to.equal(submission.zip));
  proms.push(expect(dbRecord.comments).to.equal(submission.comments));
  return Promise.all(proms);
});
