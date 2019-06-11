import { LoginPage } from '../pages/login.page';

class LoginStepsClass {
	open() {
		browser.url('/');
	}

	fillform(
		username: string = 'COMPadmin@eupp.cz',
		password: string = 'test123'
	) {
		LoginPage.username.setValue(username);
		LoginPage.password.setValue(password);
	}

	submitlog() {
		LoginPage.submitbutton.click();
	}
}

export const LoginSteps = new LoginStepsClass();
