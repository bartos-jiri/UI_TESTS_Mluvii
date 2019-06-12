//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start

import { expect } from 'chai';
import {} from 'chai';

import { LoginPage } from '../pages/login.page';
import { LoginSteps } from '../steps/login.steps';
import { UsersPage } from '../pages/Users.page';
import { LeftBarPage } from '../pages/LeftBar.page';
import { UsersSteps } from '../steps/users.steps';
//import { EuppSteps } from '../steps/'

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

		browser.pause(2000);
	});
});

describe('Get Confirmation from mail', () => {
	it('Should open eupp mail and confirm user', () => {
	
		LeftBarPage.users.click();
		browser.pause(500);
		UsersPage.addUserButton.click();
		browser.pause(500);
		expect(UsersPage.userCreateFormText.getText()).to.contain('Jméno');
		UsersSteps.fillUserForm();

		browser.pause(2000);
	});
});

// TODO: Invalid credentials case
// Credentials database / json?
