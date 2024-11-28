import StartPage from "../pages/startPage"
import LoginPage from "../pages/loginPage"
import userData from "../fixtures/userData.json"
import LogoutPage from "../pages/logoutPage"
import LikeHeroPage from "../pages/likeHeroPage"
import EditHeroPage from "../pages/editHeroPage"
import HireHeroPage from "../pages/hireHeroPage"
import DeleteHeroPage from "../pages/deleteHeroPage"
import CreateHeroPage from "../pages/createHeroPage"

const Chance = require ('chance')

const loginPage = new LoginPage()
const createHeroPage = new CreateHeroPage()
const chance = new Chance()
const deleteHeroPage = new DeleteHeroPage()
const hireHeroPage = new HireHeroPage()
const editHeroPage = new EditHeroPage()
const likeHeroPage = new LikeHeroPage()
const logoutPage = new LogoutPage()
const startPage = new StartPage()

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

    it('Test - Sucess', () => {
        cy.visit('http://localhost:3000/heroes')

        startPage.likeButtonClick()
        startPage.hireButtonClick()

        loginPage.accessLoginPageButton()
        loginPage.loginWithUser(userData.userSuccess.useremail, userData.userSuccess.userpassword)
        loginPage.forLoginButton()
        loginPage.homeAlert()

        createHeroPage.createHeroButtonClick()
        createHeroPage.fillHeroCreate(chance.first(), chance.integer({ min: 1, max: 20 }), chance.integer({ min: 1, max: 2000 }), chance.integer({ min: 1, max: 8000 }))

        likeHeroPage.likeHeroButtonClick()

        hireHeroPage.hireHeroButtonClick()

        editHeroPage.fillEditHeroButton()
        editHeroPage.fillHeroEdit(chance.first(), chance.integer({ min: 1, max: 20 }), chance.integer({ min: 1, max: 2000 }), chance.integer({ min: 1, max: 8000 }))
        editHeroPage.saveEditButtonClick()

        deleteHeroPage.deleteHeroButtonClick()

        logoutPage.logoutButtonClick()
    })
})