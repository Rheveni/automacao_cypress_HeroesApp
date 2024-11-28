import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import CreateHeroPage from "../pages/createHeroPage"
import CreateHeroAlertPage from "../pages/createHeroAlertPage"

const Chance = require ('chance')

const loginPage = new LoginPage()
const createHeroPage = new CreateHeroPage()
const chance = new Chance()
const createHeroAlertPage = new CreateHeroAlertPage()

describe('Tests', () => {
  it('Create - Sucess', () => {
    cy.visit('http://localhost:3000/heroes')
    
    loginPage.accessLoginPageButton()
    loginPage.loginWithUser(userData.userSuccess.useremail, userData.userSuccess.userpassword)
    loginPage.forLoginButton()

    createHeroPage.createHeroButtonClick()
    createHeroPage.fillHeroCreate(chance.first(), chance.integer({ min: 1, max: 20 }), chance.integer({ min: 1, max: 2000 }), 
            chance.integer({ min: 1, max: 8000 }), )
  })

  it('Create  - wrong', () => {
    cy.visit('http://localhost:3000/heroes')
    
    loginPage.accessLoginPageButton()
    loginPage.loginWithUser(userData.userSuccess.useremail, userData.userSuccess.userpassword)
    loginPage.forLoginButton()

    createHeroAlertPage.createHeroAlertButtonClick()
    createHeroAlertPage.fillHeroAlertCreate(chance.first(), chance.integer({ min: 1, max: 20 }), chance.integer({ min: 1, max: 2000 }), 
            chance.integer({ min: 1, max: 8000 }), )
  })
})