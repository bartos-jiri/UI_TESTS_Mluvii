import { InboxPage } from '../pages/Inbox.page';

class InboxStepsClass {
	acceptMail() {
		InboxPage.onTopMail.click();
		InboxPage.acceptMailButton.click();
	}

	writeMail() {
		InboxPage.bodyText.setValue('testMailbody123');
		//attachment todo
	}
	sendMail() {
		InboxPage.send.click();
	}
}

export const InboxSteps = new InboxStepsClass();
