global.cucumber = require('cucumber');
global.Given = cucumber.Given;
global.When = cucumber.When;
global.Then = cucumber.Then;
global.Before = cucumber.Before;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
global.expect = chai.expect;