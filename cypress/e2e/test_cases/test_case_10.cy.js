describe('Test Case 10: Verify Subscription in Home Page', () => {
    it('Should successfully subscribe to the newsletter', () => {
        // 1️⃣ Apsilankome pagrindiniame puslapyje
        cy.visit('https://automationexercise.com');

        cy.get('a[href="/"]').should('be.visible'); 

        // 3️⃣ Slenkame žemyn iki puslapio apačios (footer)
        cy.scrollTo('bottom');

    

        // 5️⃣ Įvedame el. pašto adresą
        cy.get('[id="susbscribe_email"]').type('testuser@test.com');

        // 6️⃣ Paspaudžiame prenumeratos mygtuką
        cy.get('[id="subscribe"]').click();

        // 7️⃣ Patikriname, ar rodoma sėkmingo užsiprenumeravimo žinutė
        cy.contains('You have been successfully subscribed!').should('be.visible');
    });
});
