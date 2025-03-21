describe('Test Case 19: View & Cart Brand Products', () => {
    it('Should allow user to view brand products and switch between brands', () => {
        // 1. Launch browser & navigate to URL
        cy.visit('https://automationexercise.com/');

        // 2. Click on 'Products' button
        cy.contains('Products').click();

        // 3. Verify that Brands are visible on the left sidebar
        cy.get('.left-sidebar').should('be.visible');
        cy.contains('Brands').should('be.visible');

        // 4. Click on any brand name (e.g., "Polo")
        cy.contains('Polo').click();  

        // 5. Verify that user is navigated to brand page and brand products are displayed
        cy.get('.title.text-center').invoke('text').then((text) => {
            expect(text.trim().toLowerCase()).to.equal('brand - polo products');
        });
        

        // 6. On left sidebar, click on any other brand link (e.g., "Madame")
        cy.contains('Madame').click();  

        // 7. Verify that user is navigated to that brand page and can see products
        cy.get('.title.text-center').invoke('text').then((text) => {
            expect(text.trim().replace(/\s+/g, ' ').toLowerCase()).to.equal('brand - madame products');
        });
        
       
    });
});
