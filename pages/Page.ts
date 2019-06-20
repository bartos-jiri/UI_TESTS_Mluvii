export class Page {
	protected browser: WebdriverIO.BrowserObject;
	constructor(selectedBrowser?: WebdriverIO.BrowserObject) {
		this.browser = selectedBrowser ? selectedBrowser : browser;
	}
}
