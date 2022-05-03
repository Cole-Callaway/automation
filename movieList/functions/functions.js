const { By } = require("selenium-webdriver");

const addMovie = async (driver) => {
  const addMovieInput = await driver.findElement(By.xpath("//input"));

  addMovieInput.sendKeys("Indiana Jones");

  const addMovieBtn = await driver.findElement(By.xpath("//button"));

  addMovieBtn.click();

  await driver.sleep(1000);

  const movie = await driver.findElement(By.xpath("//li"));

  const isDisplayed = movie.isDisplayed();

  expect(isDisplayed).toBeTruthy();
};

const checkOffMovie = async (driver) => {
  const crossOffMovie = await driver.findElement(By.xpath("//span"));

  crossOffMovie.click();

  await driver.sleep(1000);

  const crossed = await driver.findElement(By.xpath("//span.checked"));

  const isCrossed = crossed.isDisplayed();

  expect(isCrossed).toBeTruthy();
};
module.exports = { addMovie, checkOffMovie };
