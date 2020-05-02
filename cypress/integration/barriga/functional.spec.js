/// <reference types="cypress"/>

import loc from '../../support/locators'
import '../../support/commandsContas'

describe('Shoul test at a functional level', () => {
    //beforEach or reload
    before(() => {
        cy.login('jhonny@cash', 'asdASD123!@#')
        cy.resetApp()
    })

    it('Should creat an account', () => {
        // cy.get(loc.MENU.SETTINGS).click()
        // cy.get(loc.MENU.CONTAS).click()
        cy.acessarMenuConta()

        // cy.get(loc.CONTAS.NOME).type('Conta Teste 01')
        // cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.inserirConta('Conta Teste 01')

        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso')

    })

    it('Should update an account', () => {
        cy.acessarMenuConta()
        //cy.get('.fa-edit').click()
        cy.xpath(loc.CONTAS.XP_BTN_ALTERAR).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta Editada 01')
            cy.get(loc.CONTAS.BTN_SALVAR).click()
            cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')

    })

    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()

        cy.get(loc.CONTAS.NOME).type('Conta Editada 01')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', '400')

    })

})