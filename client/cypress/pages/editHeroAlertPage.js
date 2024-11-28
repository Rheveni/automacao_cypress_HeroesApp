class EditHeroAlertPage{
    selectorsList(){
        const selectors = {
            editButtonWrong:"[data-cy='pencil']",
            nameEditField: "[name='name']",
            priceEditField:"[name='price']",
            fansEditField:"[name='fans']",
            savesEditField:"[name='saves']",
            powersEditSelect:"[name='powers']",
            imageEditSelect:"[data-cy='avatarFile']",
            saveEditButton:".bg-blue-700",
            wrongAlertField: ".text-red-500"
        }
        return selectors
    }
        fillEditHeroAlertButton(){
            cy.get(this.selectorsList().editButtonWrong).eq(7).click()
    }
        fillHeroAlertEdit(nameHeroEdit, priceHeroEdit, fansHeroEdit, savesHeroEdit){
            cy.get(this.selectorsList().nameEditField).clear()
            cy.get(this.selectorsList().saveEditButton).eq(1).click()
            cy.get(this.selectorsList().wrongAlertField).eq(0)
            cy.get(this.selectorsList().nameEditField).type(nameHeroEdit)
            cy.get(this.selectorsList().priceEditField).clear()
            cy.get(this.selectorsList().saveEditButton).eq(1).click()
            cy.get(this.selectorsList().wrongAlertField).eq(0)
            cy.get(this.selectorsList().priceEditField).type(priceHeroEdit)
            cy.get(this.selectorsList().fansEditField).clear()
            cy.get(this.selectorsList().saveEditButton).eq(1).click()
            cy.get(this.selectorsList().wrongAlertField).eq(0)
            cy.get(this.selectorsList().fansEditField).type(fansHeroEdit)
            cy.get(this.selectorsList().savesEditField).clear()
            cy.get(this.selectorsList().saveEditButton).eq(1).click()
            cy.get(this.selectorsList().wrongAlertField).eq(0)
            cy.get(this.selectorsList().savesEditField).type(savesHeroEdit)
            cy.get(this.selectorsList().powersEditSelect).select('4')
            cy.get(this.selectorsList().imageEditSelect).selectFile('cypress/fixtures/avatar.jpg')
            cy.get(this.selectorsList().saveEditButton).eq(1).click()          
    }
}
export default EditHeroAlertPage