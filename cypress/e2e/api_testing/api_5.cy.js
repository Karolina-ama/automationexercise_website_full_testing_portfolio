it('POST to search product', () => {
    cy.request({
      method: 'POST',
      url: 'https://automationexercise.com/api/searchProduct',
      form: true,
      body: {
        search_product: 'top'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      
      // Jei response.body yra JSON stringas – išparsinti
      const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body;
  
      cy.log(JSON.stringify(body)); // pasirenkamai – matysi ką grąžina
  
      // Tikrinti, ar bent vieno produkto pavadinime yra "top"
      const products = body.products;
      const hasTop = products.some(product =>
        product.name.toLowerCase().includes('top')
      );
      expect(hasTop).to.be.true;
    });
  });
  