import { Page } from './Page';

class OperatorPageClass extends Page {
	constructor() {
		super();
	}

	get statusText() {
		return $(
			'//*[@id="operatorRoot"]/div/div[1]/div[2]/div[2]/div/div/div[1]/span'
		);
	}

	get logout() {
		return $('//*[@id="app"]/div/div[2]/div/div/div[1]/div[6]/div/i');
	}
}

export const OperatorPage = new OperatorPageClass();
