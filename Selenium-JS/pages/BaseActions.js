
export default class BaseActions {
  constructor(driver) {
    this.driver = driver;
  }
  async goToURL(site) {
    await this.driver.get(site);
    await this.driver.manage().window().maximize();
  }
   
  findElement(locator) {
    return this.driver.findElement(locator);
  }
  async sendKeys(locator, text) {
    await this.findElement(locator).sendKeys(text);
  }
  async click(locator) {
    await this.findElement(locator).click();
  }
  async getText(locator){
    return await this.findElement(locator).getText();
  }
  async isDisplayed(locator){
    return await this.findElement(locator).isDisplayed();
  }
}