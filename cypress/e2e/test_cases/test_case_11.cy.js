describe('Test Case 11: Verify Subscription in Cart Page', () => {
    it('Should successfully subscribe to the newsletter from the cart page', () => {
        // 1️⃣ Apsilankome pagrindiniame puslapyje
        cy.visit('https://automationexercise.com');

        cy.get('a[href="/"]').should('be.visible'); 

        // 3️⃣ Spaudžiame "Cart" mygtuką
        cy.contains('Cart').click();

        // 4️⃣ Patikriname, ar esame krepšelio puslapyje
        cy.url().should('include', '/view_cart');

        // 5️⃣ Slenkame žemyn iki puslapio apačios (footer)
        cy.scrollTo('bottom');

       

        // 7️⃣ Įvedame el. pašto adresą
        cy.get('[id="susbscribe_email"]').type('testuser@test.com');

        // 8️⃣ Paspaudžiame prenumeratos mygtuką
        cy.get('[id="subscribe"]').click();

        // 9️⃣ Patikriname, ar rodoma sėkmingo užsiprenumeravimo žinutė
        cy.contains('You have been successfully subscribed!').should('be.visible');
    });
});
