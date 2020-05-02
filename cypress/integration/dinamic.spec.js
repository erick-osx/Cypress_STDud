/// <reference types="cypress"/>

describe('Work with alerts...', () => {
    //beforEach or reload
    beforeEach(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
    })

    const foods = ['Carne', 'Frango', 'Pizza', 'Vegetariano']
    foods.forEach(food => {
        it(`Cadastro de comimda ${food}`, () => {
            cy.get('#formNome').type('Jucah')
                cy.get('#formSobrenome').type('Zinho')
                cy.get(`[name=formSexo][value=M]`).click()
                cy.xpath(`//label[contains(.,'${food}')]/preceding-sibling::input`).click()
                cy.get('#formEscolaridade').select('Doutorado')
                cy.get('#formEsportes').select('Corrida') 
                cy.get('#formCadastrar').click()
                cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        })    
    })

    it.only('Using Each to select all food options', () => {
        cy.get('#formNome').type('Jucah')
        cy.get('#formSobrenome').type('Zinho')
        cy.get(`[name=formSexo][value=M]`).click()

       // cy.get('[name=formComidaFavorita]').click({multiple: true})
       // alternativa para o multiple
        cy.get('[name=formComidaFavorita]').each($el => {
           // $el.click() ...funciona mas perde a rastreabilidade dos clicks
           if($el.val() != 'vegetariano')
                cy.wrap($el).click()
        })

        cy.get('#formEscolaridade').select('Doutorado')
        cy.get('#formEsportes').select('Corrida') 
        cy.get('#formCadastrar').click()
        cy.get('#resultado > :nth-child(1)').should('contain', 'Cadastrado!')
        //cy.clickAlert('#formCadastrar', 'Tem certeza que voce eh vegetariano?')
    })
    
})