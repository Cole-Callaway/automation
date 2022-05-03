const { Builder, Capabilities } = require("selenium-webdriver");
require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { addMovie, checkOffMovie } = require("../functions/functions");

beforeEach(async () => {
  await driver.get("http://127.0.0.1:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.sleep(1000);
  await driver.quit();
});

it("should add a new movie to list", async () => {
  await addMovie(driver);
});

it("should cross out watched movie", async () => {
  await checkOffMovie(driver);
});
