//Minha implementação ):


import demoblaze from '../pages/demoblaze'
import { assert } from 'chai';  // Using Assert style

describe('Demo blase', () => {
  beforeEach(() => {
    demoblaze.goto()
  })

  
  it('Funcionalidade: Funcionalidade do Carrinho de Compras', () => {

    //Cenário: Adicionar item ao carrinho de compras

    //Dado que estou na página inicial do site
    cy.url().should('include', 'https://www.demoblaze.com/index.html')
    
    //Quando eu clico no primeiro item da lista
    cy.visit("https://www.demoblaze.com/prod.html?idp_=1")

    //E clico no botão "Add to cart"
    cy.url().should('include', 'https://www.demoblaze.com/prod.html?idp_=1')
    cy.get('.btn-success').click()

    cy.on('window:alert', cy.spy().as('alertSpy'))
    
    //Então o item é adicionado ao carrinho de compras
    cy.visit('https://www.demoblaze.com/cart.html')

    cy.intercept('GET', 'https://api.demoblaze.com/viewcart').as('apiCall');

    cy.wait('@apiCall', { responseTimeout: 15000 }).then(({ request, response }) => {
        assert.equal(response.Items.length, 1, 'O carrinho de compras deve conter 1 item')
    });

    //demoblaze.getCardItens().should('eq', 1)
    
    //assert.equal(demoblaze.getCardItens(), 1, 'O carrinho de compras deve conter 1 item')
    
  })
})
