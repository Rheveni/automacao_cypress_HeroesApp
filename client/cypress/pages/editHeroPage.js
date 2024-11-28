class EditHeroPage{
    selectorsList(){
        const selectors = {
            editButton:"[data-cy='pencil']",
            nameEditField: "[name='name']",
            priceEditField:"[name='price']",
            fansEditField:"[name='fans']",
            savesEditField:"[name='saves']",
            powersEditSelect:"[name='powers']",
            imageEditSelect:"[data-cy='avatarFile']",
            saveEditButton:".bg-blue-700"

        }
        return selectors
    }
        fillEditHeroButton(){
            cy.get(this.selectorsList().editButton).eq(7).click()
        }
        
        fillHeroEdit(nameHeroEdit, priceHeroEdit, fansHeroEdit, savesHeroEdit){
            cy.get(this.selectorsList().nameEditField).clear().type(nameHeroEdit)
            cy.get(this.selectorsList().priceEditField).clear().type(priceHeroEdit)
            cy.get(this.selectorsList().fansEditField).clear().type(fansHeroEdit)
            cy.get(this.selectorsList().savesEditField).clear().type(savesHeroEdit)
            cy.get(this.selectorsList().powersEditSelect).select('4')
            cy.get(this.selectorsList().imageEditSelect).selectFile('cypress/fixtures/avatar.jpg')    
        }
        saveEditButtonClick(){
            cy.get(this.selectorsList().saveEditButton).eq(1).click()
        }
}
export default EditHeroPage