class CreateHeroPage{
    selectorsList(){
        const selectors = {
            createHeroButton: ".bg-blue-700",
            nameField: "[name='name']",
            priceField:"[name='price']",
            fansField:"[name='fans']",
            savesField:"[name='saves']",
            powersSelect:"[name='powers']",
            imageSelect:"[data-cy='avatarFile']",
            saveButton:".bg-blue-700"
        }
        return selectors
    }
    createHeroButtonClick(){
        cy.get(this.selectorsList().createHeroButton).click()
    }
    fillHeroCreate(nameHero, priceHero, fansHero, savesHero){
        cy.get(this.selectorsList().nameField).clear().type(nameHero)
        cy.get(this.selectorsList().priceField).clear().type(priceHero)
        cy.get(this.selectorsList().fansField).clear().type(fansHero)
        cy.get(this.selectorsList().savesField).clear().type(savesHero)
        cy.get(this.selectorsList().powersSelect).select('4')
        cy.get(this.selectorsList().imageSelect).selectFile('cypress/fixtures/avatar.jpg')
        cy.get(this.selectorsList().saveButton).eq(1).click()
    }
}
export default CreateHeroPage