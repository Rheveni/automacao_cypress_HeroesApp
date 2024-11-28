import StartPage from "../pages/startPage"

const startPage = new StartPage()

describe('Tests', () => {
  it('Login - Sucess', () => {
    cy.visit('http://localhost:3000/heroes')
    
    startPage.likeButtonClick()
    startPage.hireButtonClick()
  })
})