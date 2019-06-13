import { LoginPage } from '../pages/login.page';
import { OperatorPage } from '../pages/Operator.page';

class LoginStepsClass {
	open() {
		browser.url('/');
	}

	fillform(
		username: string = 'companyadmin@eupp.cz',
		password: string = 'test123'
	) {
		LoginPage.username.setValue(username);
		LoginPage.password.setValue(password);
	}

	submitlog() {
		LoginPage.submitbutton.click();
	}
	logout() {
		OperatorPage.logout.click();
	}
}

export const LoginSteps = new LoginStepsClass();
