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

	get nameField() {
		return browser.$('//*[@id="firstName"]');
	}
	get lastnameField() {
		return browser.$('//*[@id="firstName"]');
	}
	get emailField() {
		return browser.$('//*[@id="firstName"]');
	}
	get usernameField() {
		return browser.$('//*[@id="firstName"]');
	}
	get userCreateFormText() {
		return browser.$(
			'//*[@id="app"]/div/div[3]/div[2]/div[2]/div[1]/form/div/div[1]/div/div[1]/div[1]/div'
		);
	}
}

export const UsersPage = new UsersPageClass();
