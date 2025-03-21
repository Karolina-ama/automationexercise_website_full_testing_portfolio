describe('Test Case 12: Add Products in Cart', () => {
    it('Should add two products to the cart and verify them', () => {
        cy.visit('https://automationexercise.com/');
        cy.contains('Products').click();
        cy.contains('All Products').should('be.visible');

        // 1. Pridedame pirmą produktą į krepšelį
        cy.get('.product-overlay').eq(0).invoke('show');
        cy.get('.add-to-cart').eq(0).click({ force: true });

        cy.get('.btn-success').should('be.visible').click(); // Tęsiame apsipirkimą

        // 2. Pridedame antrą produktą
        cy.wait(1000); // Palaukiame, kad elementai tinkamai atsirastų
        cy.get('.product-overlay').eq(1).invoke('show');
        cy.wait(500);
        cy.get('.add-to-cart').eq(1).click({ force: true });

        cy.wait(1000); // Palaukiame modalinio lango
        cy.get('.btn-success').should('be.visible').click();

        // 3. Einame į krepšelį ir tikriname produktus
        cy.get('a[href="/view_cart"]').first().should('be.visible').click();
        cy.url().should('include', '/view_cart'); // Tikriname, ar esame krepšelio puslapyje

        cy.wait(3000); // Laukiame, kad visi produktai būtų atvaizduoti

        // 4. Tikriname, ar abu produktai yra krepšelyje
        cy.get('.cart_info').should('exist'); 
        cy.get('.cart_info').should('have.length', 2);
    });
});
