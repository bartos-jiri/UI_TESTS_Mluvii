import { UsersPage } from '../pages/Users.page';

class LoginStepsClass {
	addNewUser() {
		UsersPage.addUserButton.click();
	}

	fillUserForm(
		firstname: string = 'testuser01',
		lastname: string = 'test123',
		gender: 'male' | 'female' = 'male',
		email: string = 'testuser01@eupp.cz',
		newUsername: string = 'testuser01@eupp.cz'
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

	submitlog() {}
}

export const UsersSteps = new LoginStepsClass();
