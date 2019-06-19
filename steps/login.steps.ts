import { LoginPage } from '../pages/login.page';
import { OperatorPage } from '../pages/Operator.page';
import { expect } from 'chai';

class LoginStepsClass {
	open() {
		const url = __DEV_MODE__ ? '?useNew=1' : '/';
		browser.url(url);
	}

	fillform(
		username: string = 'companyadmin@eupp.cz',
		password: string = 'test123'
	) {
		LoginPage.username.setValue(username);
		LoginPage.password.setValue(password);
	}
	// TODO - get data from json?

	fillform2(operator: string) {
		switch (operator) {
			case 'o1': {
				LoginPage.username.setValue('testoperator1@eupp.cz');
				LoginPage.password.setValue('test123');
				break;
			}
			case 'o2': {
				LoginPage.username.setValue('testoperator2@eupp.cz');
				LoginPage.password.setValue('test123');
				break;
			}
			case 'ca': {
				LoginPage.username.setValue('COMPadmin@eupp.cz');
				LoginPage.password.setValue('test123');
				break;
			}
		}
	}

	submitlog() {
		LoginPage.submitbutton.click();
	}
	logout() {
		OperatorPage.logout.click();
	}
}

export const LoginSteps = new LoginStepsClass();
