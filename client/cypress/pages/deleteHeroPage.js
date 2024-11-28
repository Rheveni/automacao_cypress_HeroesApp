class DeleteHeroPage{
    selectorsList(){
        const selectors = {
            deleteHeroButton: "[data-cy='trash']",
            confirmDeleteHeroButton:".bg-red-600"
        }
        return selectors
    }
    deleteHeroButtonClick(){
        cy.get(this.selectorsList().deleteHeroButton).eq(6).click()
        cy.get('body').should('contain', 'Delete Hero?')
        cy.get(this.selectorsList().confirmDeleteHeroButton).click()
    }
}
export default DeleteHeroPage