import { Page } from './Page';

class LoginPageClass extends Page {
	constructor(selectedBrowser?: WebdriverIO.BrowserObject) {
		super(selectedBrowser);
	}

	get username() {
		return this.browser.$('#Username');
	}
	get password() {
		return $('#password');
	}
	get submitbutton() {
		return $('button');
	}
}

export const LoginPage = new LoginPageClass();
