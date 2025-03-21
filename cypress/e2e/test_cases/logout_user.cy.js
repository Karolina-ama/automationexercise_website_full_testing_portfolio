describe('Test Case 4: Logout User', () => {
    it('Should successfully logout a user', () => {  // ✅ Teisinga sintaksė
        cy.visit('https://automationexercise.com/');
        cy.contains('Signup / Login').should('be.visible');
        cy.contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');

        cy.get('[data-qa="login-email"]').type('KarolinaTest@test.com'); // ✅ Teisinga versija
        cy.get('[name="password"]').type('Test1234');
        cy.get('[data-qa="login-button"]').click(); // ✅ Tikslus selektorius
        
        cy.contains('Logged in as').should('be.visible');

        // Paspaudžiame "Logout"
        cy.contains('Logout').click();

        // Patikriname, ar vartotojas išsiregistravo
        cy.contains('Signup / Login').should('be.visible');
    });
});
