import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given("Visitamos o Site JsonPlaceHolder", () => {
    cy.visit("https://jsonplaceholder.typicode.com/guide/")
})

When("Clico no link Guide", () => {
    cy.contains('Guide').click();
    cy.wait(2000);
    cy.scrollTo('bottom')
})

And("Clico no link de photos", () => {
    cy.get('a[href="/albums/1/photos"]').should('exist').click();
    cy.wait(2000);
})

Then("Capturo os dados e valido o id 6", () => {
    cy.get('pre').should('be.visible').then($pre => {
        const photosData = JSON.parse($pre.text())
        const objectWithId6 = photosData.find(photo => photo.id === 6)
        expect(objectWithId6).to.exist
        expect(objectWithId6).to.have.property('albumId', 1)
        expect(objectWithId6).to.have.property('id', 6)
        expect(objectWithId6).to.have.property('title').that.is.a('accusamus ea aliquid et amet sequi nemo')
        expect(objectWithId6).to.have.property('url').that.is.a('https://via.placeholder.com/600/56a8c2')
        expect(objectWithId6).to.have.property('thumbnailUrl').that.is.a('https://via.placeholder.com/150/56a8c2')
    })
})
