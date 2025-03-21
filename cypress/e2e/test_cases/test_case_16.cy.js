describe('Test Case 16: Place Order: Login before Checkout', () => {
    it('Should allow a logged-in user to place an order and delete account', () => {
        // 1. Atidaryti naršyklę ir eiti į pagrindinį puslapį
        cy.visit('https://automationexercise.com/');
        
        // 2. Patikrinti, ar pagrindinis puslapis yra matomas
        cy.get('a[href="/"]').should('be.visible');

        // 3. Paspausti "Signup / Login"
        cy.contains('Signup / Login').click();

        // 4. Įvesti prisijungimo duomenis ir spausti "Login"
        cy.get('[data-qa="login-email"]').type('KarolinaTest@test.com');
        cy.get('[data-qa="login-password"]').type('Test1234');
        cy.get('[data-qa="login-button"]').click();

        // 5. Patikrinti, ar rodomas "Logged in as username"
        cy.contains('Logged in as KarolinaTest').should('be.visible');

        // 6. Pridėti produktą į krepšelį
        cy.contains('Products').click();
        cy.get('.product-overlay').first().invoke('show');
        cy.get('.add-to-cart').first().click({ force: true });
        cy.get('.btn-success').should('be.visible').click(); // Tęsiame apsipirkimą

        // 7. Eiti į krepšelį
        cy.get('a[href="/view_cart"]').first().click();

        // 8. Patikrinti, ar krepšelio puslapis atidarytas
        cy.url().should('include', '/view_cart');

        // 9. Spausti "Proceed To Checkout"
        cy.contains('Proceed To Checkout').click();

        // 10. Patikrinti adreso informaciją
        cy.get('h3.page-subheading').contains('Your delivery address').should('be.visible');
        cy.get('h3.page-subheading').contains('Your billing address').should('be.visible');

        // 11. Įvesti komentarą ir spausti "Place Order"
        cy.get('textarea[name="message"]').type('Please deliver between 9AM-5PM');
        cy.contains('Place Order').click();

        // 12. Įvesti mokėjimo informaciją
        cy.get('[name="name_on_card"]').type('Karolina Test');
        cy.get('[name="card_number"]').type('1234567890123456');
        cy.get('[name="cvc"]').type('123');
        cy.get('[name="expiry_month"]').type('07');
        cy.get('[name="expiry_year"]').type('2025');

        // 13. Spausti "Pay and Confirm Order"
        cy.contains('Pay and Confirm Order').click();

        // 14. Patikrinti, ar užsakymas buvo sėkmingai atliktas
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

        // 15. Spausti "Delete Account"
        cy.contains('Delete Account').click();

        // 16. Patikrinti, ar paskyra buvo ištrinta
        cy.get('[data-qa="account-deleted"]').should('be.visible');

        // 17. Spausti "Continue"
        
        cy.get('[data-qa="continue-button"]').click();
    });
});
