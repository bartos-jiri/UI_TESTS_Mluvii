import { ClientPage } from '../pages/Client.page';

class ClientStepsClass {
	open() {
		browser.url('https://www.janmatura.com/business');
	}

	fillform(
		username: string = 'email',
		mail: string = 'email',
		phone: string = 'eupp.cz'
	) {
		ClientPage.clientName.setValue(username);
		ClientPage.clientMail.setValue(mail);
		ClientPage.clientPhonenum.setValue(phone);
	}
}

export const ClientSteps = new ClientStepsClass();
