import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import LikeHeroPage from "../pages/likeHeroPage"

const loginPage = new LoginPage()
const likeHeroPage = new LikeHeroPage()

describe('Tests', () => {
  it('Login - Sucess', () => {
    cy.visit('http://localhost:3000/heroes')
    
    loginPage.accessLoginPageButton()
    loginPage.loginWithUser(userData.userSuccess.useremail, userData.userSuccess.userpassword)
    loginPage.forLoginButton()
    
    likeHeroPage.likeHeroButtonClick()
  })
})