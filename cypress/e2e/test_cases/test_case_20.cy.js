describe('Test Case 20: Search and Verify Products in Cart After Login', () => {
    it('Searches for a product, adds to cart, logs in, and verifies cart persistence', () => {
        // 1. Launch browser & navigate to URL
        cy.visit('http://automationexercise.com');

        // 2. Click on 'Products' button
        cy.contains('Products').click();

        // 3. Verify user is navigated to ALL PRODUCTS page
        cy.url().should('include', '/products');
        cy.contains('All Products').should('be.visible');

        // 4. Enter product name in search input and click search button
        cy.get('#search_product').type('Blue Top');
        cy.get('#submit_search').click();

        // 5. Verify 'SEARCHED PRODUCTS' is visible
        cy.contains('Searched Products').should('be.visible');

        // 6. Verify all related products are visible
        cy.get('.productinfo').should('be.visible');

        // 7. Add those products to cart
        cy.get('.productinfo').each(($el) => {
            cy.wrap($el).find('.add-to-cart').click();
            cy.wait(500);
            cy.get('.btn-success').click(); 
        });

        
        cy.get('a[href="/login"]').first().click(); 

        cy.get('[data-qa="login-email"]').type('Karolina123@test.com');
        cy.get('[data-qa="login-password"]').type('Test1234');
        cy.get('[data-qa="login-button"]').click();

        cy.get('a[href="/view_cart"]').first().click();
        cy.get('a[href="/product_details/1"]').should('be.visible');
    });
});
