describe('Test Case 3: Login with invalid email and password', () => {
    it('Should not login a user with invalid email and password', () => {
        cy.visit('https://automationexercise.com/');

        cy.contains('Signup / Login').should('be.visible');
        cy.contains('Signup / Login').click();

        // 1️⃣ Patikriname, ar "Login to your account" egzistuoja
        cy.get('h2').contains('Login to your account').should('be.visible');

        cy.get('[data-qa="login-email"]').type('122@deer.com');
        cy.get('[data-qa="login-password"]').type('gugugaga');
        cy.get('[data-qa="login-button"]').click();

        // 2️⃣ Tikriname, ar rodomas klaidos pranešimas
        cy.contains('Your email or password is incorrect!').should('be.visible');
    });
});
