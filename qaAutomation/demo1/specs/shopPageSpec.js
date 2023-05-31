describe('DemoBlaze Shop Tests', function() {
    it('Should be able to add an item to the cart and validate it', function() {
      // Visit the website
      cy.visit('https://www.demoblaze.com/')
  
      // Click on the first item in the store
      
      cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click()
  
      // Save the name of the item
      cy.get('.name').invoke('text').as('itemName')
  
      // Click on the "Add to cart" button
      cy.get('.btn-success').click()
  
      // Handle the alert
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Product added.')
      })
  
      // Go to the cart
      cy.get('#cartur').click()
  
      // Validate that the item is in the cart
      cy.get('@itemName').then((itemName) => {
        cy.get('.success').should('contain', itemName)
      })
    })
  })
  