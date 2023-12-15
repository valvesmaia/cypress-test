/// <reference types= "Cypress"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso ', () => {
    it('Fluxo da compra de protudos', () => {
        cy.Login_teste('standard_user', 'secret_sauce')

        // Ordenação de produtos do menor para o maior valor:
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')

        // Validação da ordenação desses produtos, do menor para o maior:
        cy.ordenacaoProdutos()

        // Adicionado produtos ao carrinho:
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="back-to-products"]').click()

        // Checagem da quantidade de protudos adicionado ao carrinho:
        cy.get('.shopping_cart_link').should('have.text', '3')

        // Checagem se está os 3 card do produtos adcionado ao carrinho:
        cy.get('.shopping_cart_link').click()
        cy.verificarProdutos()

        // Checkout:
        cy.get('.shopping_cart_link').click()
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('teste primeiro nome')
        cy.get('[data-test="lastName"]').type('teste ultimo nome')
        cy.get('[data-test="postalCode"]').type('12345678')
        cy.get('[data-test="continue"]').click()

        // Verificando produtos no checkout:
        cy.verificarProdutos()

        // Checagem do preço total dos produtos:
        cy.get('.summary_total_label').should('have.text', 'Total: $36.69')

        // Finalizar o pedido:
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text', 'Thank you for your order!')
    });
});