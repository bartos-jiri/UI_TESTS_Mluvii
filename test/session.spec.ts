//Start Selenium server with:  ./node_modules/.bin/selenium-standalone start

import { expect } from 'chai';
import {} from 'chai';

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
	it('Should start session, Accept Client and chat', () => {
		firstChrome.url('/');
		secondChrome.url('/');

		firstChrome.$('#Username').setValue('I am browser A');
		secondChrome.$('#Username').setValue('I am browser B');

		firstChrome.pause(1000);
		secondChrome.pause(1000);

		firstChrome.$('#Username').setValue('ROFL');
		secondChrome.$('#Username').setValue('OMG');
	});
});
