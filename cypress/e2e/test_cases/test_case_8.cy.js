describe('Test Case 8: Verify All Products and Product Detail Page', () => {
    it('Should navigate to All Products page and verify product details', () => {
        // 1️⃣ Apsilankome pagrindiniame puslapyje
        cy.visit('https://automationexercise.com');

        cy.get('a[href="/"]').should('be.visible'); 

        // 3️⃣ Spaudžiame "Products" mygtuką
        cy.contains('Products').click();

        // 4️⃣ Patikriname, ar vartotojas nukreiptas į ALL PRODUCTS puslapį
        cy.url().should('include', '/products');
        cy.contains('All Products').should('be.visible');

        // 5️⃣ Patikriname, ar produktų sąrašas matomas
        cy.get('.features_items').should('be.visible');

        // 6️⃣ Paspaudžiame "View Product" ant pirmo produkto
        cy.get('.features_items').find('.product-image-wrapper').first().contains('View Product').click();

        // 7️⃣ Patikriname, ar vartotojas nukreiptas į produkto detalių puslapį
        cy.url().should('include', '/product_details');

        // 8️⃣ Patikriname, ar produkto detalės matomos
        cy.get('.product-information').should('be.visible'); // Bendra produkto info
        cy.get('.product-information h2').should('be.visible'); // Produkto pavadinimas
        cy.get('.product-information p').should('contain', 'Category'); // Kategorija
        cy.get('.product-information span').should('contain', 'Rs.'); // Kaina
        cy.get('.product-information b').should('contain', 'Availability'); // Prieinamumas
        cy.get('.product-information b').should('contain', 'Condition'); // Būklė
        cy.get('.product-information b').should('contain', 'Brand'); // Gamintojas
    });
});
