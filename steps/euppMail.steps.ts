import { EuppPage } from '../pages/Eupp.page';

class EuppStepsClass {
	open() {
		browser.url('http://eupp.cz/email/?_task=mail&_mbox=INBOX');
	}

	fillform(
		username: string = 'email',
        password: string = 'email',
        server: string = 'eupp.cz',
	) {
		EuppPage.username.setValue(username);
		EuppPage.password.setValue(password);
		EuppPage.server.setValue(server);
	}

	submitlog() {
		EuppPage.submitbutton.click();
	}
}

export const EuppSteps = new EuppStepsClass();