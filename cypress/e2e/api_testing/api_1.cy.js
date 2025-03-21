describe('API Test: Get All Products List', () => {
    it('Should return a list of products', () => {
        cy.request('GET', 'https://automationexercise.com/api/productsList').then((response) => {
            // Patikrinti statuso kodą
            expect(response.status).to.eq(200);
            expect(response.body).length.to.be.greaterThan(1);
            console.log(response.body);
            cy.log(response.body);
        });
    });
});
