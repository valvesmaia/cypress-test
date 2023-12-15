/// <reference types= "Cypress"/>

describe('API - Teste funcional de login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.api_test()
    });

    it('Deve validar senha incorreta', () => {
        cy.api_test()
    });   
});