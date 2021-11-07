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
        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta Teste 01')).click()
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

    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()
        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Movimenta')
        cy.get(loc.MOVIMENTACAO.VALOR).type('321')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Jhon')
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta Editada 01')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR_MOV).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')

        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_EX('Movimenta', '321')).should('exist')
    })

    it('Should get balance', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta Editada 01')).should('contain', '321,00')
    })

    it('Should remove a transaction', () => {

    })

})