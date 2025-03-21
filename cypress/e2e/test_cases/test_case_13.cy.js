describe('Test Case 13: Verify Product quantity in Cart', () => {
    it('Verify that product is displayed in cart page with exact quantity', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/"]').should('be.visible');  
        cy.get('.features_items').find('a[href*="product_details"]').first().click();
        cy.url().should('include', 'product_details');
        cy.get('#quantity').clear().type('4');
        cy.get('#quantity').should('have.value', '4');
        // 1. Paspaudžiame "Add to cart" mygtuką
        cy.get('.btn.btn-default.cart').click();
        cy.wait(1000);
        cy.get('#cartModal .modal-body p:nth-child(2) a u').click();
        cy.get('td.cart_quantity button').should('have.text', '4');



    });
});