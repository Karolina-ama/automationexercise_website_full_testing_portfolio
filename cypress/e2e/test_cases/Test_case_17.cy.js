describe('Test Case 17: Remove Products From Cart', () => {
    it('Should remove a product from the cart successfully', () => {
        // 1. Launch browser and navigate to the website
        cy.visit('https://automationexercise.com/');

        // 2. Verify that home page is visible
        cy.get('a[href="/"]').should('be.visible');

        // 3. Add a product to the cart
        cy.get('.product-overlay').first().invoke('show');
        cy.get('.add-to-cart').first().click({ force: true });
    

        // 4. Click "Continue Shopping" to proceed
        cy.get('.btn-success').first().click();

        // 5. Navigate to the cart page
        cy.get('a[href="/view_cart"]').first().click();
        cy.url().should('include', '/view_cart');

        // 6. Verify that the cart page is displayed
        cy.contains('Shopping Cart').should('be.visible');

        // 7. Click the 'X' button to remove the product
        cy.get('.cart_delete a').first().click();

        // 8. Verify that the product is removed from the cart
        cy.contains('Cart is empty').should('be.visible'); 
    });
});
