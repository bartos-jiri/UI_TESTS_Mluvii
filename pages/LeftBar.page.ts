//Company admin - left bar.  ... xpaths are changing by permission

import { Page } from './Page';

class LeftBarPageClass extends Page {
	constructor() {
		super();
	}

	get operator() {
		return browser.$(
			'//*[@id="app"]/div/div[2]/div/div[2]/div[1]/a[1]/div/div/i'
		);
	}
	get inbox() {
		return browser.$(
			'//*[@id="app"]/div/div[2]/div/div[2]/div[1]/a[2]/div/div/i'
		);
	}
	get wallboard() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/a[1]/div/div/i');
	}
	get reports() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/a[2]/div/div/i');
	}
	get users() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/a[3]/div/div/i');
	}
	get tenant() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/div[3]/div');
	}
	get operators() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/a[5]/div/div/i');
	}
	get sessions() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/a[6]/div/div/i');
	}
	get visitors() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/a[4]/div/div/i');
	}
	get allmails() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/a[7]/div/div/i');
	}
	get settings() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/a[8]/div/div/i');
	}
	get docs() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/div[5]/div/i');
	}
	get feedback() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/div[6]/div/i');
	}
	get profile() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/a[9]/div/div/i');
	}
	get logout() {
		return browser.$('//*[@id="app"]/div/div[2]/div/div/div[1]/div[7]/div');
	}
}

export const LeftBarPage = new LeftBarPageClass();
