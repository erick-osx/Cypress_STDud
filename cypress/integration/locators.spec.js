/// <reference types="cypress"/>

describe('Work with alerts...', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Alerts', () => {
        cy.get(':nth-child(1) > :nth-child(3) > [type="button"]')
        cy.get('table#tabelaUsuarios tbody > tr:eq(0) td:nth-child(3) > input')
        cy.get('[onclick*=\'Francisco\']')
        cy.get('#tabelaUsuarios td:contains(\'Doutorado\'):eq(0)~td:eq(3) > input')
        cy.get('#tabelaUsuarios tr:contains(\'Doutorado\'):eq(0) td:eq(6) input')
        })

    it('Using xpath', () => {
        cy.xpath('//input[contains(@onClick, \'Francisco\')]')
        cy.xpath("//td[contains(.,'Usuario A')]/following-sibling::td[contains(.,'Mestrado')]")
    })
})
