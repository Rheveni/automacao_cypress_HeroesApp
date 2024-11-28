import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import LogoutPage from "../pages/logoutPage"

const loginPage = new LoginPage()
const logoutPage = new LogoutPage()

describe('Tests', () => {
  it('Logout - Sucess', () => {
    cy.visit('http://localhost:3000/heroes')
    
    loginPage.accessLoginPageButton()
    loginPage.loginWithUser(userData.userSuccess.useremail, userData.userSuccess.userpassword)
    loginPage.forLoginButton()

    logoutPage.logoutButtonClick()
  })
})