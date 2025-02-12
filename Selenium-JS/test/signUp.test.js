import getDriver from '../helpers/driver';
import { config } from '../helpers/config';
import SignUpPage from '../pages/SignUpPage';

describe('Create account page', () => {
    let driver;
    let page;

    beforeAll(async () => {
        driver = await getDriver(config.browser);
        page = new SignUpPage(driver);
    });

    beforeEach(async () => {
        await driver.get(config.baseUrl + '/account/register');
    })
    
    afterAll(async () => {
        if (driver) {
            await driver.quit();
        }
    });


    it('Should give an error for existing email', async () => {
        await page.createAccount("laura", "test@gmail.com", "test12345")
        await driver.manage().setTimeouts({ implicit: 5000 });
        let message = await page.errorMessage();
        expect(message).toBe(true);
    });
})