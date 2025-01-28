import {Builder} from 'selenium-webdriver';
import 'chromedriver';
import 'geckodriver';
import 'edgedriver';

export default async function getDriver(browser){
let driver = null;
try{
switch(browser){
    case 'firefox':
    driver = await new Builder().forBrowser('firefox').build();
    break;
    case 'edge':
    driver = await new Builder().forBrowser('edge').build();
    break;
    case 'chrome':
    driver = await new Builder().forBrowser('chrome').build();
    console.log('Driver initialized');
    break;
    default:
    throw new Error('Unsupported browser')
}
}catch (error) {
    console.error('Error initializing driver:', error);
  }
}
