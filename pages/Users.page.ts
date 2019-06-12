import { Page } from './Page';

class UsersPageClass extends Page {
	constructor() {
		super();
	}

	get addUserButton() {
		return browser.$(
			'//*[@id="app"]/div/div[3]/div[2]/div/div[1]/div[1]/div[2]/button/div/i'
		);
	}

	get firstnameField() {
		return browser.$('//*[@id="firstName"]');
	}
	get lastnameField() {
		return browser.$('//*[@id="lastName"]');
	}

	get maleRadio() {
		return browser.$(
			'//*[@id="app"]/div/div[3]/div[2]/div[2]/div[1]/form/div/div[1]/div/div[3]/div[2]/label[1]/div[1]/div'
		);
	}
	get femaleRadio() {
		return browser.$(
			'//*[@id="app"]/div/div[3]/div[2]/div[2]/div[1]/form/div/div[1]/div/div[3]/div[2]/label[2]/div[1]'
		);
	}
	get emailField() {
		return browser.$('//*[@id="email"]');
	}
	get usernameField() {
		return browser.$('//*[@id="userName"]');
	}
	get userCreateFormText() {
		return browser.$(
			'//*[@id="app"]/div/div[3]/div[2]/div[2]/div[1]/form/div/div[1]/div/div[1]/div[1]/div'
		);
	}
}

export const UsersPage = new UsersPageClass();
