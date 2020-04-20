/// <reference types="cypress"/>

describe('Work with alerts...', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Alerts', () => {
        cy.get('#alert').click()
        cy.on('window:alert', msg => {
            console.log(msg)
            expect(msg).to.be.equal('Alert Simples')
        })
    })

    it('Alerts com mock', () => {
        const stub = cy.stub().as('alerta') 
        cy.on('window:alert', stub)
        cy.get('#alert').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Alert Simples')
        })
    })

    it.only('Confirm', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Confirmado')
        })
        
    })

    it.only('Deny', () => {
        cy.get('#confirm').click()
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Confirm Simples')
            return false
        })
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Negado')
        })
        
    })

    it.only('Prompt', () => {
       
        cy.window().then(win => {
            cy.stub(win, 'prompt').returns('12')
        })
        cy.on('window:confirm', msg => {
            expect(msg).to.be.equal('Era 12?')
        })

        cy.on('window:alert', msg => {
            expect(msg).to.be.equal(':D')
        })
        cy.get('#prompt')
            .click()
    })

})