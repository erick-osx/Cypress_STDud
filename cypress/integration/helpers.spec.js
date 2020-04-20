/// <reference types="cypress"/>

// describe('Esperas...', () => {
//     before(() => {
//         cy.visit('https://wcaquino.me/cypress/componentes.html')
//     })

//     beforeEach(() => {
//         cy.reload()
//     })

describe('Helpers...', () => {
    it('wrap', () => {
        const obj = {nome: 'Joh', idade: 75}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

        cy.visit('https://wcaquino.me/cypress/componentes.html')
    //    // cy.get('#formNome').type('funciona')
    //    //usando promises
    //     cy.get('#formNome').then($el => {
    //         cy.wrap($el).type('funciona pelo cypress')
    //     })

        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei botão 1'))
        cy.wrap(promise).then(ret => console.log(ret))
        cy.get('#buttonList').then(() => console.log('Encontrei botão 2'))

        cy.wrap(1).then(num => {
            return 2
        }).should('be.equal', 2)

    })

    it.only('Its...', () => {
        const obj = {nome: 'Joh', idade: 75}
        cy.wrap(obj).should('to.have.property','nome','Joh')
        cy.wrap(obj).its('nome').should('be.equal', 'Joh')

        const obj2 = {nome: 'Joh', idade: 75, endereco: {rua: 'lobos'}}
        cy.wrap(obj2).its('endereco').should('have.property', 'rua')
        //...
    })

    it.only('Invoke...', () => {
        const getValue = () => 1;
        const soma = (a, b) => a + b;

        cy.wrap({fn: getValue}).invoke('fn').should('be.equal', 1)
        cy.wrap({fn: soma}).invoke('fn', 2, 3).should('be.equal', 5)

        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#formNome').invoke('val', 'Texto via invoke')
    })
    
})