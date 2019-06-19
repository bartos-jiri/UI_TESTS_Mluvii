import { Page } from './Page';

class InboxPageClass extends Page {
	constructor() {
		super();
	}

	get incomingText() {
		return $('//*[@id="app"]/div/div[3]/div[2]/div/div[1]/div[1]/div[1]/div');
	}
	get newMailButton() {
		return $(
			'//*[@id="app"]/div/div[3]/div[2]/div[1]/div[1]/div[1]/div[2]/button/span'
		);
	}
	get onTopMail() {
		return $(
			'//*[@id="app"]/div/div[3]/div[2]/div/div[1]/div[2]/div[1]/div/div/div[1]/div/div[1]/div/div/div[1]'
		);
	}
	get acceptMailButton() {
		return $(
			'//*[@id="app"]/div/div[3]/div[2]/div[2]/div[1]/div[1]/div[2]/button[2]/span'
		);
	}
	get bodyText() {
		return $(
			'//*[@id="thread-view-email-editor"]/div[1]/div[2]/div[2]/div/div/div[2]/div[1]/div/div[1]'
		);
	}
	get send() {
		return $(
			'//*[@id="thread-view-email-editor"]/div[1]/div[2]/div[2]/div/div/div[3]/button'
		);
	}
	get noOtherMail() {
		return $(
			'//*[@id="app"]/div/div[3]/div[2]/div/div[1]/div[2]/div[1]/div/div/div/div'
		);
	}
}

export const InboxPage = new InboxPageClass();
