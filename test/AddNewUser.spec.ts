//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start

import { expect } from 'chai';
import {} from 'chai';

import { LoginPage } from '../pages/login.page';
import { LoginSteps } from '../steps/login.steps';
import { UsersPage } from '../pages/Users.page';
import { LeftBarPage } from '../pages/LeftBar.page';
import { exists } from 'fs';

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
		browser.pause(2000);
	});
});

// TODO: Invalid credentials case
// Credentials database / json?
