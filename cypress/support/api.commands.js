/// <reference types= "Cypress"/>

Cypress.Commands.add('api_test',() =>{
    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
            "email": "fulano@qa.com",
            "password": "teste"
        }
    }).then((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body.message).to.equal('Login realizado com sucesso')
    })

    cy.request({
        method: 'POST',
        url: 'http://localhost:3000/login',
        body: {
            "email": "fulano@qa.com",
            "password": "senhaIncorreta"
        },
        failOnStatusCode: false
    }).then((response)=>{
        expect(response.status).to.equal(401)
        expect(response.body.message).to.equal('Email e/ou senha inválidos')
    })
})