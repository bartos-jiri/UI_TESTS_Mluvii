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

	get submit() {
		return browser.$(
			'//*[@id="app"]/div/div[3]/div[2]/div[2]/div[1]/form/div/div[1]/div/div[6]/button[2]/div[2]'
		);
	}
	get userCreateFormText() {
		return browser.$(
			'//*[@id="app"]/div/div[3]/div[2]/div[2]/div[1]/form/div/div[1]/div/div[1]/div[1]/div'
		);
	}

	// modal page openeg fro email link

	get setPasswordButton() {
		return browser.$('.btn btn-default=Nastavit heslo');
	}
	get newPasswordField() {
		return browser.$('//*[@id="Password"]');
	}
	get confirmPasswordField() {
		return browser.$('//*[@id="ConfirmPassword"]');
	}
	get submitNewPassword() {
		return browser.$(
			'/html/body/div/div/div/div/form/fieldset/div[3]/div[2]/button'
		);
	}
}

export const UsersPage = new UsersPageClass();

///html/body/div/div/div/div/div[1]/div[2]/a/button

//
