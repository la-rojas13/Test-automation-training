import getDriver from '../helpers/driver';
import {config} from '../helpers/config';

let driver;
beforeAll(async () => {
  driver = await getDriver(config.browser);
});


afterAll(async () => {
  if (driver) {
    await driver.quit();
  }
});

describe('Sample test', () => {
  it('should  get the expected title', async () => {
    await driver.get(config.baseUrl);
    const title = await driver.getTitle();
    expect(title).toBe('An Amazing EverShop Store');
  });
});
