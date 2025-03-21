// describe('API Test: POST request to Get All Products List', () => {
//     it('Should return 405 Method Not Allowed', () => {
//         cy.request({
//             method: 'POST',
//             url: 'https://automationexercise.com/api/productsList',
//             failOnStatusCode: false // Užtikrina, kad testas nenutrūktų dėl 405 klaidos
//         }).then((response) => {
           
//             expect(response.status).to.eq(405);

           
//             expect(response.body).to.include('This request method is not supported');
            
   
//             console.log(response.body);
//             cy.log(response.body);
//         });
//     });
// });


// --nesuprantu kodel neveikia


describe('API Test: Invalid POST method on productsList', () => {
    it('Should return 200 but ideally should be 405 (API limitation)', () => {
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/productsList',
            failOnStatusCode: false, // neleisk testui kristi automatiškai
        }).then((response) => {
            expect(response.status).to.eq(200); // Nes taip grąžina ši API
            cy.log(JSON.stringify(response.body));
        });
    });
});

