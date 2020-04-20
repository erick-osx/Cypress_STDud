/// <reference types="cypress"/>

describe('Working with iframe', () => {

    // before(() => {
       
    // })
   it('Deve preencher campo de texto', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#frame1').then(iframe => {
            const body = iframe.contents().find('body')
            cy.wrap(body).find('#tfield')
                .type('Segue o jogo')
                .should('have.value', 'Segue o jogo')
            
            // cy.on('window:alert', msg => {
            // expect(msg).to.be.equal('saf')
            // })
            // cy.wrap(body).find('#otherButton').click()
        })
   })
   
   it.only('Deve testar frame diretamente', () => {
        cy.visit('https://wcaquino.me/cypress/frame.html')
        cy.get('#otherButton').click()
        cy.on('window:alert', msg => {
            expect(msg).to.be.equal('Click OK!')
            
        })    
    })
})
