describe('Test Case 18: View Category Products', () => {
    it('Should allow user to view category products and switch between categories', () => {
        // 1. Launch browser & navigate to URL
        cy.visit('https://automationexercise.com/');

        // 2. Verify that categories are visible on the left side bar
        cy.get('.left-sidebar').should('be.visible');
        cy.contains('Category').should('be.visible');

        // 3. Click on 'Women' category
        cy.contains('Women').click();

        // 4. Click on any category link under 'Women' category (e.g., Dress)
        cy.contains('Tops').click();  // Keisk pagal norimą subkategoriją

        // 5. Verify that category page is displayed and confirm text
        cy.get('.title.text-center').should('contain.text', 'Women - Tops Products'); 

        // 6. On left sidebar, click on any sub-category link of 'Men' category
        cy.contains('Men').click();
        cy.contains('Tshirts').click(); // Keisk pagal norimą subkategoriją

        // 7. Verify that user is navigated to that category page
        cy.get('.title.text-center').should('contain.text', 'Men - Tshirts Products');
    });
});
