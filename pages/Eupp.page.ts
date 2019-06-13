import { Page } from './Page';

class EuppPageClass extends Page {
	constructor() {
		super();
	}

	get username() {
		return $('#rcmloginuser');
	}
	get password() {
		return $('#rcmloginpwd');
	}
	get server() {
		return $('#rcmloginhost');
	}
	get submitbutton() {
		return $('#rcmloginsubmit');
	}
	get themail() {
		return $('a=Account created');
	}
	get themaillink() {
		return $('*=https://apptest.mluvii');
	}
}

export const EuppPage = new EuppPageClass();
