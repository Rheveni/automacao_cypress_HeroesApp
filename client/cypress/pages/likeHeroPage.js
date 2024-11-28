class LikeHeroPage {
    selectorsList() {
        const selectors = {
            likeHeroButton: "[data-cy='like']"
            
        }
        return selectors
    }

    likeHeroButtonClick() {
        cy.get(this.selectorsList().likeHeroButton).eq(7).click()
    }
}
export default LikeHeroPage