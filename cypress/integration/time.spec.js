/// <reference types="cypress"/>

describe('Work with alerts...', () => {
    //beforEach or reload
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    it('Going to the past', () => {
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain','21/04/2020')

        // cy.clock()
        // cy.get('#buttonNow').click()
        // cy.get('#resultado > span').should('contain','31/12/1969')

        const dateTime = new Date(2018,2,25,19,45,2)
        cy.clock(dateTime.getTime())
        cy.get('#buttonNow').click()
        cy.get('#resultado > span').should('contain','25/03/2018')
    })

    it.only('Goes to the future', () => {
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').should('contain','1587')
        cy.get('#resultado > span').invoke('text').should('gt','1587480523027')

        cy.clock()
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('lte','0')
        // cy.wait(1000)
        // cy.clock()
        // cy.get('#buttonTimePassed').click()
        // cy.get('#resultado > span').invoke('text').should('lte','1000')

        cy.tick(5000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte','5000')
        cy.tick(10000)
        cy.get('#buttonTimePassed').click()
        cy.get('#resultado > span').invoke('text').should('gte','15000')
        
    })
}) 