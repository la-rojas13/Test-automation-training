import BaseActions from "./BaseActions";

const USERNAME_INPUT = {
    name: 'full_name'
}
const EMAIL_INPUT = {
    name: 'email'
}
const PASSWORD_INPUT = {
    name: 'password'
}
const SUBMIT_BTN = {
    css: 'button[type="submit"]'
}
const ERR_MSG = {
    css: 'div.text-critical'
}
export default class SignUpPage extends BaseActions {
    constructor(driver) {
        super(driver)
    }
    async createAccount(username, email, password) {
        await this.sendKeys(USERNAME_INPUT, username);
        await this.sendKeys(EMAIL_INPUT, email);
        await this.sendKeys(PASSWORD_INPUT, password);
        await this.click(SUBMIT_BTN);
    }
    async errorMessage() {
        return this.isDisplayed(ERR_MSG);
    }
}