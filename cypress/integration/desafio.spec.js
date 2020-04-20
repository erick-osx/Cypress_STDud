/// <reference types="cypress"/>

describe('Desafio', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })

    // it('Primeira msg...', () => {
    //     cy.get('#formCadastrar').click()
    //     cy.on('window:alert', cad => {
    //         expect(cad).to.be.equal('Nome eh obrigatorio')
    //     })
    // })

    // it('Nome', () => {
    //     cy.get('#formNome')
    //         .type('Erick')
    //         .should('have.value','Erick')
    // })

    // it('Segunda msg...', () => {
    //     cy.get('#formCadastrar').click()
    //     cy.on('window:alert', cad2 => {
    //         expect(cad2).to.be.equal('Sobrenome eh obrigatorio')
    //     })
    // })

    // it('Sobrenome', () => {
    //     cy.get('[data-cy=dataSobrenome]')
    //         .type('Santos')
    //         .should('have.value','Santos')
    // })

    // it('Terceira msg...', () => {
    //     cy.get('#formCadastrar').click()
    //     cy.on('window:alert', cad3 => {
    //         expect(cad3).to.be.equal('Sexo eh obrigatorio')
    //     })
    // })

    // it('Sobrenome', () => {
    //     cy.get('#formSexo > tbody > tr > :nth-child(1)')
    //         .click()
    //         .should('have.length',1)
    // })

    // it('Quarta msg...', () => {
    //     cy.get('#formCadastrar').click()
    //     cy.on('window:alert', cad4 => {
    //         expect(cad4).to.be.equal('Sexo eh obrigatorio')
    //     }) 
    // })

    // it('Resultado...', () => {
    //     cy.get('#resultado span')
    //     .should('contain','Cadastrado!')
    // })

    it.only('Validando msg...', () => {
        const stub = cy.stub().as('alerta')
        cy.on('window:alert', stub)
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(0)).to.be.calledWith('Nome eh obrigatorio'))

        cy.get('#formNome').type('Erick')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(1)).to.be.calledWith('Sobrenome eh obrigatorio'))
        
        cy.get('[data-cy=dataSobrenome]').type('Santos')
        cy.get('#formCadastrar').click()
            .then(() => expect(stub.getCall(2)).to.be.calledWith('Sexo eh obrigatorio'))

        cy.get('#formSexoMasc').click()
        cy.get('#formCadastrar').click()

        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')


    })

})