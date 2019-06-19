//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start

import { expect } from 'chai';
import {} from 'chai';

import { LoginSteps } from '../steps/login.steps';
import { LoginPage } from '../pages/Login.page';
import { InboxSteps } from '../steps/inbox.steps';
import { InboxPage } from '../pages/Inbox.page';
import { LeftBarPage } from '../pages/LeftBar.page';

describe('login', () => {
	it('Should login in Mluvii', () => {
		LoginSteps.open();
		LoginSteps.fillform2('o2');
		LoginPage.submitbutton.click();

		LoginSteps.submitlog();
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
		browser.pause(5500);
		expect(InboxPage.noOtherMail.getText()).to.contain('Žádné příchozí zprávy');
	});
});
