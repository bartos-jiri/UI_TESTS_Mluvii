//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start

import { expect } from 'chai';
import {} from 'chai';
//import { multiremote } from 'webdriverio';

import { LoginSteps } from '../steps/login.steps';

describe('login', () => {
	it('Should login in Mluvii', () => {
		async () => {};

		LoginSteps.open();
		LoginSteps.fillform();
		LoginSteps.submitlog();
	});
});

describe('Start session', () => {
	it('Should start session, Accept Client and chat'), () => {};

	(async () => {
		const browser = await multiremote({
			myChromeBrowser: {
				capabilities: {
					browserName: 'chrome',
				},
			},
			myFirefoxBrowser: {
				capabilities: {
					browserName: 'firefox',
				},
			},
		});

		// open url with both browser at the same time
		await browser.url('http://json.org');

		// click on an element at the same time
		const elem = await browser.$('#someElem');
		await elem.click();

		// only click with one browser (Firefox)
		await elem.myFirefoxBrowser.click();
	})();
});
