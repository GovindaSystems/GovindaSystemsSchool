describe('DemoBlaze Shop Tests', function() {
    it('Should be able to purchase an item', function() {
      // Visit the website
      cy.visit('https://www.demoblaze.com/')
      
      // Click on the first item in the store
      cy.get('#tbodyid > div:nth-child(1) > div > div > h4 > a').click()
  
      // Click on the "Add to cart" button
      cy.get('.btn-success').click()
  
      // Handle the alert
      cy.on('window:alert', (str) => {
        expect(str).to.equal('Product added.')
      })
  
      // Go to the cart
      cy.get('#cartur').click()
  
      // Click on the "Place Order" button
      cy.get('.btn-success').click()
  
      // Fill out the form
      cy.get('#name').type('Test User')
      cy.get('#country').type('Test Country')
      cy.get('#city').type('Test City')
      cy.get('#card').type('1234567890123456')
      cy.get('#month').type('January')
      cy.get('#year').type('2023')
  
      // Click on the "Purchase" button
      cy.get('#orderModal .btn-primary').click()
  
      // Confirm the purchase
      cy.get('.sweet-alert').should('contain', 'Thank you for your purchase!')
      cy.get('.confirm').click()
    })
  })
  