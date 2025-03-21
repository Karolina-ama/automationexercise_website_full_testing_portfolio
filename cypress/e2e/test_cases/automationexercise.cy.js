describe('Automation Exercise Home Page', () => {
    it('Should load the home page successfully', () => {
        cy.visit('https://automationexercise.com/');
        cy.wait(5000);

        // Spausdiname visą puslapio tekstą į konsolę
        cy.get('body').then(($body) => {
            console.log("Puslapio turinys:", $body.text());
        });

        // Bandom ieškoti teksto įvairiais būdais
        cy.contains('Automation Exercise').should('be.visible');
        cy.get('h1').should('contain', 'Automation Exercise');
        cy.get('.header-logo').should('be.visible');
    });
});
