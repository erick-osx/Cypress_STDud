/// <reference types="cypress"/>


describe('Shoul test at a functional level', () => {
    let token
    //beforEach or reload
    before(() => {
        cy.getToken('jhonny@cash', 'asdASD123!@#')
            .then(tkn => {
                token = tkn
            })
    })

    beforeEach(() => {
        cy.resetRest()
    })

    it('Should creat an account', () => {
        
        cy.request({
            url:'/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta via rest'
            }
         }).as('response')
            
        
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
            expect(res.body).to.have.property('id')
            expect(res.body).to.have.property('nome', 'Conta via rest')
        })
        
    })

    it('Should update an account', () => {
        cy.request({
            method: 'GET',
            url: '/contas',
            headers: { Authorization: `JWT ${token}`},
            qs: {
                nome: 'Conta para alterar'
            }
        }).then(res => {

                cy.request({
                    url: `/contas/${res.body[0].id}`,
                    method: 'PUT',
                    headers: { Authorization: `JWT ${token}`},
                    body: {
                        nome: 'conta alterada via rest'
                    }
                }).as('response')
                
        })

        cy.get('@response').its('status').should('be.equal', 200)
     })

    it('Should not create an account with same name', () => {
        cy.request({
            url:'/contas',
            method: 'POST',
            headers: { Authorization: `JWT ${token}` },
            body: {
                nome: 'Conta mesmo nome'
            },
            failOnStatusCode: false

         }).as('response')
            
        
        cy.get('@response').then(res => {
            console.log(res)
            expect(res.status).to.be.equal(400)
            expect(res.body.error).to.be.equal('Já existe uma conta com esse nome!')
        })
    })

    it('Should create a transaction', () => {
        cy.getContaByName('Conta para movimentacoes')
            .then(contaId => {
                cy.request({
                    method: 'POST',
                    url: '/transacoes',
                    headers: { Authorization: `JWT ${token}` },
                    body: {
                        conta_id: contaId,
                        data_pagamento: Cypress.moment().add({days: 1}).format('DD/MM/YYYY'),
                        data_transacao: Cypress.moment().format('DD/MM/YYYY'), //biblioteca para trabalhar com data em js já incluida no Cypress
                        descricao: "Movimentacao ",
                        envolvido: "Joh",
                        status: true,
                        tipo: "REC",
                        valor: "404"
                    }
                }).as('response')
           })
           cy.get('@response').its('status').should('be.equal', 201)
           cy.get('@response').its('body.id').should('exist')
    })

    it('Should get balance', () => {
       
    })

    it('Should remove a transaction', () => {
     
    })

})