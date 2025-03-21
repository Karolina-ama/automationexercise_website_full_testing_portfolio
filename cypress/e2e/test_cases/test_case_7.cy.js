describe('Test Case 7: Verify Test Cases Page', () => {
    it('Should navigate to the Test Cases page successfully', () => {
        // 1️⃣ Apsilankome pagrindiniame puslapyje
        cy.visit('https://automationexercise.com');

        cy.get('a[href="/"]').should('be.visible'); 

        // 3️⃣ Spaudžiame "Test Cases" mygtuką
        cy.contains('Test Cases').click();

        // 4️⃣ Patikriname, ar vartotojas pateko į „Test Cases“ puslapį
        cy.url().should('include', '/test_cases'); // Patikrina URL
        cy.contains('Test Cases').should('be.visible'); // Patikrina puslapio antraštę
    });
});
