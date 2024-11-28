import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import DeleteHeroPage from "../pages/deleteHeroPage"

const loginPage = new LoginPage()
const deleteHeroPage = new DeleteHeroPage()

describe('Tests', () => {
  it('Login - Sucess', () => {
    cy.visit('http://localhost:3000/heroes')
    
    loginPage.accessLoginPageButton()
    loginPage.loginWithUser(userData.userSuccess.useremail, userData.userSuccess.userpassword)
    loginPage.forLoginButton()
    
    deleteHeroPage.deleteHeroButtonClick()
  })
})