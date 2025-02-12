import {Builder} from 'selenium-webdriver';
import 'chromedriver';
import 'geckodriver';
import 'edgedriver';

export default async function getDriver(browser){
let driver = null;
switch(browser){
    case 'firefox':
    driver = await new Builder().forBrowser('firefox').build();
    break;
    case 'edge':
    driver = await new Builder().forBrowser('edge').build();
    break;
    case 'chrome':
    driver = await new Builder().forBrowser('chrome').build();
    break;
    default:
    throw new Error('Unsupported browser');
}
return driver;
}
