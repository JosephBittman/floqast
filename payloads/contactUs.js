module.exports = new function () {
  this.create = (options = {}) => {
    return {
      firstName: options.firstName || 'first name',
      lastName: options.lastName || 'last name',
      company: options.company || 'company name',
      businessEmail: options.businessEmail || 'business@email.com',
      phone: options.phone || '1.800.123.4567',
      country: options.country || 'United States',
      zip: options.zip || '91411',
      comments: options.comments || 'This is a comment.',
    };
  };
}();
