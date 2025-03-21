describe('Test Case 6: Contact Us', () => {
    it('Should successfully send a message to the website', () => {
        cy.visit('https://automationexercise.com/');
        cy.contains('Contact Us').click();
        cy.contains('GET IN TOUCH').should('be.visible');
        cy.get('[data-qa="name"]').type('Karolina');
        cy.get('[data-qa="email"]').type('karolina@test.com');
        cy.get('[data-qa="subject"]').type('Test subject');
        cy.get('[data-qa="message"]').type('This is a test message.');

        cy.get('[name="upload_file"]').attachFile('test_file.txt');

        cy.get('[data-qa="submit-button"]').click(); 
        cy.contains('Your details have been submitted successfully')
        cy.get('[data-qa="home-button"]').click(); 
    });
});


// 7 upload file nepavyksta