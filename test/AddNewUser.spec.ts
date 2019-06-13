//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start

import { expect } from 'chai';
import {} from 'chai';

import { LoginSteps } from '../steps/login.steps';
import { UsersPage } from '../pages/Users.page';
import { LeftBarPage } from '../pages/LeftBar.page';
import { UsersSteps } from '../steps/users.steps';
import { EuppSteps } from '../steps/euppMail.steps';

describe('Login as CompAdmin', () => {
	it('Should login in Mluvii', () => {
		LoginSteps.open();
		LoginSteps.fillform();
		LoginSteps.submitlog();
	});
});

describe('Add New User', () => {
	it('Should create new user', () => {
		browser.maximizeWindow();
		LeftBarPage.users.waitForDisplayed();
		LeftBarPage.users.click();
		browser.pause(500);
		UsersPage.addUserButton.click();
		browser.pause(500);
		expect(UsersPage.userCreateFormText.getText()).to.contain('Jméno');
		UsersSteps.fillUserForm();
		UsersSteps.submit();
		browser.pause(2000);
		//LoginSteps.logout();
	});
});

describe('Get Confirmation from mail', () => {
	it('Should open eupp mail and click confirmation user link', () => {
		EuppSteps.open();
		EuppSteps.fillform();
		EuppSteps.submitlog();
		browser.pause(500);
		EuppSteps.clickonmail();
		EuppSteps.clickonmaillink();
		browser.pause(2000);
	});
});

describe('Set new password', () => {
	it('...', () => {
		browser.pause(1000);
		UsersSteps.setNewPassword();
	});
});

describe('Login new user', () => {
	it('Login created user to Mluvii', () => {
		LoginSteps.open();
		LoginSteps.fillform('testuser04@eupp.cz', 'test123');
		LoginSteps.submitlog();
		browser.pause(2000);
	});
});

// TODO: Invalid credentials case
// Credentials database / json?
