import { UsersPage } from '../pages/Users.page';

class LoginStepsClass {
	addNewUser() {
		UsersPage.addUserButton.click();
	}

	fillUserForm(
		firstname: string = 'Testuser04',
		lastname: string = 'Testovaci',
		gender: 'male' | 'female' = 'male',
		email: string = 'testuser04@eupp.cz',
		newUsername: string = 'testuser04@eupp.cz'
	) {
		UsersPage.firstnameField.setValue(firstname);
		UsersPage.lastnameField.setValue(lastname);

		if (gender == 'male') {
			UsersPage.maleRadio.click();
		} else {
			UsersPage.femaleRadio.click();
		}

		UsersPage.emailField.setValue(email);
		UsersPage.usernameField.setValue(newUsername);
	}

	submit() {
		UsersPage.submit.click();
	}

	setNewPassword(password: string = 'test123') {
		UsersPage.setPasswordButton.click();
		browser.pause(1000);
		UsersPage.newPasswordField.setValue(password);
		UsersPage.confirmPasswordField.setValue(password);
		UsersPage.submit.click();
	}
}

export const UsersSteps = new LoginStepsClass();
