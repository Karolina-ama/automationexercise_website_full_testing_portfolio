describe('Test Case 9: Search Product', () => {
    it('Should search for a product and verify search results', () => {
        // 1️⃣ Apsilankome pagrindiniame puslapyje
        cy.visit('https://automationexercise.com');

        cy.get('a[href="/"]').should('be.visible'); 

        // 3️⃣ Spaudžiame "Products" mygtuką
        cy.contains('Products').click();

        // 4️⃣ Patikriname, ar vartotojas nukreiptas į ALL PRODUCTS puslapį
        cy.url().should('include', '/products');
        cy.contains('All Products').should('be.visible');

        // 5️⃣ Įvedame produkto pavadinimą į paieškos laukelį
        cy.get('#search_product').type('T-Shirt');

        // 6️⃣ Paspaudžiame "Search" mygtuką
        cy.get('#submit_search').click();

        // 7️⃣ Patikriname, ar rodoma "SEARCHED PRODUCTS"
        cy.contains('Searched Products').should('be.visible');

        // 8️⃣ Patikriname, ar matomi ieškoti produktai
        cy.get('.features_items .product-image-wrapper').should('be.visible');
    });
});
