const {assert} = require('chai');
const webdriver = require('selenium-webdriver');
const Capabilities = require('selenium-webdriver/lib/capabilities')
        .Capabilities;
const capabilities = Capabilities.firefox();
capabilities.set('marionette', true);

let driver;

describe('Automation Playground tests', async () => {
    describe('When verifying the blog title', () => {
        it('should be equil to Automation Playground', async() => {
            const title = await driver.getTitle();
            assert.equal(title, 'Automation Playground');
        });
    });
});
before(async() => {
    driver = await new webdriver.Builder()
            .withCapabilities(capabilities).build();
    driver.get("https://automation-playground.blogspot.com");
});
after(async() => {
    await driver.quit();
});