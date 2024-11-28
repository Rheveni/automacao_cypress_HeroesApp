class LoginPage{
    selectorsList(){
        const selectors = {
            loginButton:".gap-8",
            emailField: "[name='email']",
            passwordField:"[name='password']",
            toLoginButton:".bg-blue-700",
            wrongAlertLogin: '.text-red-500',
            wrongEmptyLoginAlert: ':nth-child(1) > .text-red-500'
        }
        return selectors
    }

    accessLoginPageButton(){
        cy.get(this.selectorsList().loginButton).eq(0).click();
    }

    loginWithUser(useremail, userpassword){
        cy.get(this.selectorsList().emailField).type(useremail)
        cy.get(this.selectorsList().passwordField).type(userpassword)
    }

    forLoginButton(){
        cy.get(this.selectorsList().toLoginButton).click()  
    }

    homeAlert(){
        cy.get('body').should('contain', 'Create New Hero')
    }

    wrongLoginAlert(){
        cy.get(this.selectorsList().wrongAlertLogin).should('be.visible')
    }

    wrongEmptyLoginAlert(){
        cy.get(this.selectorsList().wrongEmptyLoginAlert).should('be.visible')
    }
}
export default LoginPage