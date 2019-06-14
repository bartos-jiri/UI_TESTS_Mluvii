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

describe('Answer to the Mails', () => {
	it('Accept mail from top and answer - while new mail is existing.', () => {
		browser.maximizeWindow();
		LeftBarPage.inbox.click();

		const elem = InboxPage.onTopMail;
		InboxPage.incomingText.waitForExist();

		while (elem.isExisting()) {
			InboxSteps.acceptMail();
			InboxSteps.writeMail();
			InboxSteps.sendMail();
		}

		expect(InboxPage.noOtherMail.getText()).to.contain('Žádné příchozí zprávy');
	});
});
