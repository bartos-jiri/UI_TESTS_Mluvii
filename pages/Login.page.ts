import { Page } from './Page';

class LoginPageClass extends Page {
	constructor() {
		super();
	}

	get username() {
		return $('#Username');
	}
	get password() {
		return $('#password');
	}
	get submitbutton() {
		return $('button');
	}
}

export const LoginPage = new LoginPageClass();
