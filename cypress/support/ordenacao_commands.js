/// <reference types= "Cypress"/>

Cypress.Commands.add('ordenacaoProdutos',()=>{
    cy.get(':nth-child(1) > .inventory_item_description').should('contain', 'Sauce Labs Onesie')
    cy.get(':nth-child(2) > .inventory_item_description').should('contain', 'Sauce Labs Bike Light')
    cy.get(':nth-child(3) > .inventory_item_description').should('contain', 'Sauce Labs Bolt T-Shirt')
})