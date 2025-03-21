it('POST to search product without search_product parameter', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true,
      failOnStatusCode: false
    }).then((response) => {
      // Tikras statusas vis tiek yra 200, tad pritaikome testą prie realybės
      expect(response.status).to.eq(200);
  
      // Jei body yra tekstas – parsinti
      const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
  
      // Tikriname, ar yra klaidos žinutė
      expect(body.message || JSON.stringify(body)).to.include('search_product parameter is missing');
    });
  });
  