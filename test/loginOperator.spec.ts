//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start

import { expect } from 'chai';
import {} from 'chai';

import { LoginPage } from '../pages/login.page';
import { OperatorPage } from '../pages/Operator.page';

describe('login', () => {
	it('Should login in Mluvii', () => {
		browser.url('/');

		LoginPage.username.setValue('testoperator2@eupp.cz');
		LoginPage.password.setValue('test123');
		LoginPage.submitbutton.click();

		expect(OperatorPage.statusText.getText()).to.contain('Som online');

		browser.pause(2000);
	});
});

// TODO: Invalid credentials case
// Credentials database / json?
