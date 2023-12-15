/// <reference types= "Cypress"/>

describe.only('Teste Funcional de login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.Login_teste('standard_user', 'secret_sauce')
        cy.get('.title').should('contain', 'Products')
    });

    it('Validar login incorreto', () => {
        cy.Login_teste('incorreto', 'secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
       
    });

    it('Validar Senha incorreta', () => {
        cy.Login_teste('standard_user', 'incorreto')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    });
});