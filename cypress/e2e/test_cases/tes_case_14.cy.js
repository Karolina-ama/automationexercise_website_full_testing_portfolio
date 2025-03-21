describe('Test Case 13: Verify Product quantity in Cart', () => {
    it('Verify that product is displayed in cart page with exact quantity', () => {
        cy.visit('https://automationexercise.com/');
        cy.get('a[href="/"]').should('be.visible');  
        cy.get('.features_items').find('a[href*="product_details"]').first().click();
        cy.url().should('include', 'product_details');
        cy.get('#quantity').clear().type('4');
        cy.get('#quantity').should('have.value', '4');
        // 1. Paspaudžiame "Add to cart" mygtuką
        cy.get('.btn.btn-default.cart').click();
        cy.wait(1000);
        cy.get('#cartModal .modal-body p:nth-child(2) a u').click();
        cy.get('td.cart_quantity button').should('have.text', '4');
        //7. Click Proceed To Checkout
        cy.contains('Proceed To Checkout').click();
        cy.get('a[href="/login"]').eq(1).click();
        //8
        cy.get('[data-qa="signup-name"]').type('Karolina12'); 
        cy.get('[data-qa="signup-email"]').type('karolinatest@test.com');
        cy.get('[data-qa="signup-button"]').click(); // Paspaudžia "Signup" mygtuką
        // 9 Fill all details in Signup and create account.   
        cy.get('#id_gender2').click(); 
        cy.get('#password').type('Test1234');
        cy.get('#days').select('25'); 
        cy.get('#months').select('7'); 
        cy.get('#years').select('1995'); 
        cy.get('#newsletter').click();
        cy.get('#optin').click();
        cy.get('#first_name').type('Karolina');
        cy.get('#last_name').type('Test');
        cy.get('#company').type('TestCompany');
        cy.get('#address1').type('Test Street 123');
        cy.get('#address2').type('Test Address 2');
        cy.get('#country').select('United States');
        cy.get('#state').type('California');
        cy.get('#city').type('Los Angeles');
        cy.get('#zipcode').type('12345');
        cy.get('#mobile_number').type('1234567890');
        cy.get('[data-qa="create-account"]').click();
        cy.get('h2[data-qa="account-created"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();
        cy.contains('Logged in as Karolina12').should('be.visible');
        //12
        cy.get('a[href="/view_cart"]').eq(0).click();
        //13
        cy.get('.btn.btn-default.check_out').click();
        //14
        //15
        cy.get('.form-control').type('Test1234');
        cy.get('a[href="/payment"]').click();
        // 16. Enter payment details: Name on Card, Card Number, CVC, Expiration date
        cy.get('[name="name_on_card"]').should('be.visible').type('Karolina Test');
        cy.get('[name="card_number"]').should('be.visible').type('1234567890123456');
        cy.get('[name="cvc"]').should('be.visible').type('123');
        cy.get('[name="expiry_month"]').should('be.visible').type('07');
        cy.get('[name="expiry_year"]').should('be.visible').type('25');
        // 17. Click 'Pay and Confirm Order' button
        cy.get('[data-qa="pay-button"]').click();

        // 18. Verify success message 'Your order has been placed successfully!'
        cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
        //19 delete account
        cy.get('a[href="/delete_account"]').click();
        //20
        cy.get('[data-qa="account-deleted"]').should('be.visible');
        cy.get('[data-qa="continue-button"]').click();







        




    });
});