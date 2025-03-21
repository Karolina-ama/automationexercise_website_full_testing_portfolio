describe('Test Case 5: Register User with existing email', () => {
    it('Should return error message when registering with existing email', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/"]').should('be.visible'); 
     
        cy.contains('Signup / Login').should('be.visible');
        cy.contains('Signup / Login').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.get('[data-qa="signup-name"]').type('BarboraTest');
        cy.get('[data-qa="signup-email"]').type('KarolinaTest@test.com'); 
        cy.get('[data-qa="signup-button"]').click();
        cy.contains('Email Address already exist!').should('be.visible');
    });
});

// praejo viskas ok 