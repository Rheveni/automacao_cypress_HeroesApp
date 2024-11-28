class HireHeroPage{
    selectorsList(){
        const selectors = {
            hireHeroButton:"[data-cy='money']",
            confirmButton:".bg-red-600"
        }
        return selectors
    }

    hireHeroButtonClick(){
        cy.get(this.selectorsList().hireHeroButton).eq(7).click()
        cy.get('body').should('contain', 'Hire Hero?')
        cy.get(this.selectorsList().confirmButton).click()
    }
}

export default HireHeroPage