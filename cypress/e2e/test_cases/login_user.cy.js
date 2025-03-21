describe('Test Case 2: Login User with correct email and password', () => {
    it('Should successfully login a user, and delete account', () => {
        cy.visit('https://automationexercise.com/');
        cy.contains('Signup / Login').should('be.visible');
        cy.contains('Signup / Login').click();
        cy.contains('Login to your account').should('be.visible');
        
        cy.get('[data-qa="login-email"]').type('testuser@test.com');
        cy.get('[data-qa="login-password"]').type('Test1234');
        cy.get('[data-qa="login-button"]').click();
        
        cy.contains('Logged in as TestUser').should('be.visible');
        cy.contains('Delete Account').click();
        cy.contains('Account Deleted!').should('be.visible');
    });
});

