import { Page } from './Page';

class ClientPageClass extends Page {
	constructor() {
		super();
	}

	get chatWidget() {
		return $('#Path_2-2');
	}
	get clientName() {
		return $(
			'//*[@id="app"]/div/div[1]/div/div/div/div[2]/div/form/div/div[1]/div[1]/div/div[2]/div[2]/div/input'
		);
	}
	get clientMail() {
		return $(
			'//*[@id="app"]/div/div[1]/div/div/div/div[2]/div/form/div/div[1]/div[1]/div/div[3]/div[2]/div/input'
		);
	}
	get clientPhonenNum() {
		return $(
			'//*[@id="app"]/div/div[1]/div/div/div/div[2]/div/form/div/div[1]/div[1]/div/div[4]/div[2]/div/input'
		);
	}
}

export const ClientPage = new ClientPageClass();
