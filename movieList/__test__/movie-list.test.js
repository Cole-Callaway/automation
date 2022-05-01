const { Builder, Capabilities, By } = require("selenium-webdriver");
require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome());

beforeAll(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.sleep(1000);
  await driver.quit();
});
