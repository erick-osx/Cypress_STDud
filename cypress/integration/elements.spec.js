/// <reference types="cypress"/>

describe('Work with basic elements', () => {
    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    beforeEach(() => {
        cy.reload()
    })

    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado') //na busca com esse metodo é aceito o jquery selector
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')
    })

    it('Links', () => {
        cy.get('[href="#"]').click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')//o get fica atrelado a uma classe css ou id
    })

    it('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value','textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('???')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value','Teste123')
        
        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto', { delay:100})
            .should('have.value','acerto')

    })

    it('RadioButton', () => {
        cy.get('#formSexoFem')
            .click()
            .should('be.checked')
        
        cy.get('#formSexoMasc').should('not.be.checked')

        cy.get("[name='formSexo']").should('have.length', 2) //verifica a quantidade de radiobutton
        
    })

    it('CheckBox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name="formComidaFavorita"]').click({multiple: true})
        cy.get('#formComidaPizza').should('not.be.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })

    it('ComboBox', () => {
        cy.get('[data-test=dataEscolaridade]')
            .select('Superior') //também poderia selecionar o velue
            .should('have.value', 'superior')

            //toDo validar as opções do combo
    })

    it.only('Combo Multiplo', () => {
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao', 'Corrida'])

            //TODO validar opções selecionadas do combo multiplo
    })
})
//Available sequences are: selectAll, moveToStart, moveToEnd, del, backspace, esc, enter,
// rightArrow, leftArrow, upArrow, downArrow, home, end, insert, pageUp, pageDown, {, alt,
// option, ctrl, control, meta, command, cmd, shift.
// If you want to skip parsing special character sequences and type the text exactly
// as written, pass the option: {parseSpecialCharSequences: false}
