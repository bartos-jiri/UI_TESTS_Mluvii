//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start

import { expect } from 'chai';
import {} from 'chai';

import { LoginPage } from '../pages/login.page';
import { LoginSteps } from '../steps/login.steps';
import { OperatorPage } from '../pages/Operator.page';

describe('login', () => {
	it('Should login in Mluvii', () => {
		browser.url('/');

		LoginSteps.fillform2('o1');
		LoginSteps.submitlog();

		expect(OperatorPage.statusText.getText()).to.contain(' Jsem online');

		browser.pause(2000);
	});
});

// TODO: Invalid credentials case
// Credentials database / json?
