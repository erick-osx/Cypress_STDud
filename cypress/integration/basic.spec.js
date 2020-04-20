/// <reference types="cypress" />

describe('Cypress basics', () => {
    it.only('Should visit a page and assert title', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

       // cy.pause()

        cy.title().should('to.be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')

        //forma de usar o equal e contain para o mesmo cy
        //nesse caso faco uma busca a mesnos de title
        cy.title()
            .should('to.be.equal', 'Campo de Treinamento')
            .should('contain', 'Campo')

        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo')

        let syncTitle
        
        cy.title().then(title => {
            console.log(title)

            cy.get('#formNome').type(title)

            syncTitle = title
        })

        cy.get('[data-cy=dataSobrenome]').then($el => {
            $el.val(syncTitle)
        })

        cy.get('#elementosForm\\:sugestoes').then($el => {
            cy.wrap($el).type(syncTitle)
        })

            //toDo imprimir o log no console
            //toDo escrever o log em um campo de texto
        
        //outra melhoria do exemplo acima, em relacao a legibilidade, usando 'and'
        // cy.title()
        //     .should('to.be.equal', 'Campo de Treinamento')
        //     .and('contain', 'Campo')
    })
        
    it('Shoul find and interact with an element', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
            
        // cy.get('#buttonSimple').click()
        // cy.get('#buttonSimple').should('have.value', 'Obrigado!')
        //forma otimizada da versao acima
        cy.get('#buttonSimple')
        .click()
        .should('have.value', 'Obrigado!')
    })
})