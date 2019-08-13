module.exports = new function () {
  this.getContactUsSubmissionByEmail = async (businessEmail) => {
    return {
      firstName: 'first name',
      lastName: 'last name',
      company: 'company name',
      businessEmail: businessEmail,
      phone: '1.800.123.4567',
      country: 'United States',
      zip: '91411',
      comments: 'This is a comment.',
    };
  };
}();
