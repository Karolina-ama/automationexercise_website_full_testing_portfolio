describe('API Test: Get All Brands List', () => {
    it('Should return a list of brands', () => {
        cy.request('GET', 'https://automationexercise.com/api/brandsList').then((response) => {
            expect(response.status).to.eq(200);

            const body = JSON.parse(response.body); // 🔧 čia svarbiausia vieta

            expect(body).to.have.property('brands');
            expect(body.brands).to.be.an('array');
            expect(body.brands.length).to.be.greaterThan(0);

            cy.log(`Rasta prekių ženklų: ${body.brands.length}`);
        });
    });
});
