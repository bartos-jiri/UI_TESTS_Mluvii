//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start

import { expect } from 'chai';
import {} from 'chai';

import { LoginPage } from '../pages/login.page';
import { OperatorPage } from '../pages/Operator.page';
import { InboxSteps } from '../steps/inbox.steps';
import { InboxPage } from '../pages/Inbox.page';
import { LeftBarPage } from '../pages/LeftBar.page';

describe('login', () => {
	it('Should login in Mluvii', () => {
		browser.url('/');

		LoginPage.username.setValue('testoperator1@eupp.cz');
		LoginPage.password.setValue('test123');
		LoginPage.submitbutton.click();

		expect(OperatorPage.statusText.getText()).to.contain('Jsem online');

		browser.pause(500);
	});
});

describe('Answer to Mail', () => {
	it('Accept mail from top and answer', () => {
		browser.maximizeWindow();
		LeftBarPage.inbox.click();
		let x = 0;
		browser.pause(500);
		const elem = InboxPage.onTopMail;
		while (elem.isExisting()) {
			InboxSteps.acceptMail();
			InboxSteps.writeMail();
			InboxSteps.sendMail();
			browser.pause(50);
			//x += 1;
		}
	});
});
