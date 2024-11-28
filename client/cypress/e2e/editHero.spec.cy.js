import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import EditHeroPage from "../pages/editHeroPage"
import EditHeroAlertPage from "../pages/editHeroAlertPage"

const Chance = require ('chance')

const loginPage = new LoginPage()
const chance = new Chance()
const editHeroPage = new EditHeroPage()
const editHeroAlertPage = new EditHeroAlertPage()

describe('Tests', () => {
  it('Edit - Sucess', () => {
    cy.visit('http://localhost:3000/heroes')
    
    loginPage.accessLoginPageButton()
    loginPage.loginWithUser(userData.userSuccess.useremail, userData.userSuccess.userpassword)
    loginPage.forLoginButton()

    editHeroPage.fillEditHeroButton()
    editHeroPage.fillHeroEdit(chance.first(), chance.integer({ min: 1, max: 20 }), chance.integer({ min: 1, max: 2000 }), 
            chance.integer({ min: 1, max: 8000 }), )
  })

  it('Edit - Wrong', () => {
    cy.visit('http://localhost:3000/heroes')
    
    loginPage.accessLoginPageButton()
    loginPage.loginWithUser(userData.userSuccess.useremail, userData.userSuccess.userpassword)
    loginPage.forLoginButton()

    editHeroAlertPage.fillEditHeroAlertButton()
    editHeroAlertPage.fillHeroAlertEdit(chance.first(), chance.integer({ min: 1, max: 20 }), chance.integer({ min: 1, max: 2000 }), 
            chance.integer({ min: 1, max: 8000 }), )
  })
})