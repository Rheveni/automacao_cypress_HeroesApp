class StartPage{
    selectorsList(){
        const selectors = {
            likeButton: "[data-cy='like']",
            hireButton: "[data-cy='money']",
            okButton: '.gap-4 > .gap-2 > .undefined',

        }
        return selectors
    }

    likeButtonClick(){
        cy.get(this.selectorsList().likeButton).eq(2).click()
        cy.get('body').should('contain', 'You must log in to like')
        cy.get(this.selectorsList().okButton).click()
    }

    hireButtonClick(){
        cy.get(this.selectorsList().hireButton).eq(2).click()
        cy.get('body').should('contain', 'You must log in to hire this hero')
        cy.get(this.selectorsList().okButton).click()
    }
}
export default StartPage