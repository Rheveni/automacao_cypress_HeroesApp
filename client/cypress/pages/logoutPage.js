class LogoutPage{
    selectorsList(){
        const selectors = {
            logoutButton:'nav > .flex > :nth-child(2) > .undefined'
        }
        return selectors
    }

    logoutButtonClick(){
        cy.get(this.selectorsList().logoutButton).click({force:true})
        cy.get('body').should('contain', 'Login')
    }
}

export default LogoutPage