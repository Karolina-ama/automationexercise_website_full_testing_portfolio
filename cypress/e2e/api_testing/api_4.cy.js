describe('API Test: Invalid PUT Method on Brands List', () => {
    it('Should return 405 Method Not Allowed', () => {
        cy.request({
            method: 'PUT',
            url: 'https://automationexercise.com/api/brandsList',
            failOnStatusCode: false, // svarbu: leisti Cypress’ui testuoti net jei statusas ne 2xx
        }).then((response) => {
            expect(response.status).to.eq(405);

            // Atsakymas turėtų būti tekstas – parsink jeigu reikia
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;

            // Patikrinam žinutę
            expect(body.message || body).to.include('not supported');
        });
    });
});


// nesuprant kodel neveikia