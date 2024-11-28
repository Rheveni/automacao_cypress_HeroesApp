import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"

const loginPage = new LoginPage()

describe('All - Tests', () => {

    it('Test - Failed', () => {
        cy.visit('http://localhost:3000/heroes')

        loginPage.accessLoginPageButton()
        loginPage.forLoginButton()
        loginPage.wrongEmptyLoginAlert()
        loginPage.loginWithUser(userData.userFail.useremail, userData.userFail.userpassword)
        loginPage.forLoginButton()
        loginPage.wrongLoginAlert()
    })
})