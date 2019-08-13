exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),

  cucumberOpts: {
    format: 'node_modules/cucumber-pretty'
  },

  suites: {
    contact_us: 'test/features/contact_us.feature',
  },

  capabilities: {
    browserName: 'chrome',
    elementScrollBehavior: 0,
  },

  beforeLaunch() {
    require('./init/setup');
  },

  onPrepare: function () {
    require('./init/postLaunchGlobals');
    return browser.waitForAngularEnabled(false);
  }
};
