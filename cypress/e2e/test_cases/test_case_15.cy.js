describe('Test Case 15: Place Order: Register before Checkout', () => {
    it('Should register, place an order, and verify account deletion', () => {
        // 1. Open website
        cy.visit('https://automationexercise.com/');

        // 2. Verify home page is visible
        cy.get('a[href="/"]').should('be.visible');

        // 3. Click 'Signup / Login' button
        cy.contains('Signup / Login').click();

        // 4. Fill all details in Signup and create account
        cy.get('[data-qa="signup-name"]').type('Karolina15');
        cy.get('[data-qa="signup-email"]').type('Karolina000@test.com');
        cy.get('[data-qa="signup-button"]').click();
        
        // Fill registration form
        cy.get('#id_gender2').click();
        cy.get('#password').type('Test1234');
        cy.get('#days').select('25'); 
        cy.get('#months').select('July'); 
        cy.get('#years').select('1995'); 
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type('Karolina');
        cy.get('#last_name').type('Test');
        cy.get('#company').type('TestCompany');
        cy.get('#address1').type('Test Street 123');
        cy.get('#country').select('United States');
        cy.get('#state').type('California');
        cy.get('#city').type('Los Angeles');
        cy.get('#zipcode').type('12345');
        cy.get('#mobile_number').type('1234567890');
        cy.get('[data-qa="create-account"]').click();

        // 5. Verify 'ACCOUNT CREATED!' and click 'Continue' button
        cy.get('h2[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();

        // 6. Verify 'Logged in as username'
        cy.contains('Logged in as Karolina15').should('be.visible');

        // 7. Add products to cart
        cy.contains('Products').click();
        cy.get('.product-overlay').first().invoke('show');
        cy.get('.add-to-cart').first().click({ force: true });
        cy.wait(1000);
        cy.get('.btn-success').click();

        // 8. Click 'Cart' button
        cy.contains('Cart').click();

        // 9. Verify that cart page is displayed
        cy.url().should('include', '/view_cart');

        // 10. Click Proceed To Checkout
        cy.contains('Proceed To Checkout').click();

        // 11. Verify Address Details and Review Your Order
        cy.get('h3.page-subheading').contains('Your delivery address').should('be.visible');
        cy.get('h3.page-subheading').contains('Your billing address').should('be.visible');
        cy.get('.cart_info').should('be.visible');

        // 12. Enter description in comment text area and click 'Place Order'
        cy.get('textarea[name="message"]').type('This is a test order.');
        cy.contains('Place Order').click();

        // 13. Enter payment details
        cy.get('[name="name_on_card"]').type('Karolina Test');
        cy.get('[name="card_number"]').type('1234567890123456');
        cy.get('[name="cvc"]').type('123');
        cy.get('[name="expiry_month"]').type('07');
        cy.get('[name="expiry_year"]').type('2025');

        // 14. Click 'Pay and Confirm Order' button
        cy.get('[data-qa="pay-button"]').click();

        // 15. Verify success message
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

        // 16. Click 'Delete Account' button
        cy.contains('Delete Account').click();

        // 17. Verify 'ACCOUNT DELETED!' and click 'Continue' button
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
    });
});
