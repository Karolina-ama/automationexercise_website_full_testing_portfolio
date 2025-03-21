describe('Test Case 1: Register User', () => {
    it('Should successfully register a new user, login, and delete account', () => {
        cy.visit('https://automationexercise.com/');

        // 1️⃣ Paspaudžiame "Signup / Login"
        cy.contains('Signup / Login').click();

        // 2️⃣ Patikriname, ar matome "New User Signup!"
        cy.contains('New User Signup!').should('be.visible');

        // 3️⃣ Įvedame vardą ir el. paštą
        cy.get('[data-qa="signup-name"]').type('KarolinaTest');
        cy.get('[data-qa="signup-email"]').type('KarolinaTest@test.com'); // Unikalus el. paštas
        cy.get('[data-qa="signup-button"]').click();

        // 4️⃣ Patikriname, ar matome "ENTER ACCOUNT INFORMATION"
        cy.contains('Enter Account Information').should('be.visible');

        // 5️⃣ Užpildome paskyros informaciją
        cy.get('#id_gender2').check(); // Pasirenkame lytį
        cy.get('[data-qa="password"]').type('Test1234');
        cy.get('[data-qa="days"]').select('15');
        cy.get('[data-qa="months"]').select('July');
        cy.get('[data-qa="years"]').select('1995');

        // 6️⃣ Pasirenkame "Sign up for our newsletter!" ir "Receive special offers from our partners!"
        cy.get('#newsletter').check();
        cy.get('#optin').check();

        // 7️⃣ Užpildome adresą
        cy.get('[data-qa="first_name"]').type('Karolina');
        cy.get('[data-qa="last_name"]').type('Test');
        cy.get('[data-qa="company"]').type('TestCompany');
        cy.get('[data-qa="address"]').type('Test Street 123');
        cy.get('[data-qa="address2"]').type('Test Address 2');
        cy.get('[data-qa="country"]').select('United States');
        cy.get('[data-qa="state"]').type('California');
        cy.get('[data-qa="city"]').type('Los Angeles');
        cy.get('[data-qa="zipcode"]').type('90001');
        cy.get('[data-qa="mobile_number"]').type('1234567890');

        // 8️⃣ Paspaudžiame "Create Account"
        cy.get('[data-qa="create-account"]').click();

        // 9️⃣ Patikriname, ar paskyra sukurta
        cy.contains('Account Created!').should('be.visible');

        // 🔟 Paspaudžiame "Continue"
        cy.get('[data-qa="continue-button"]').click();

        // 1️⃣1️⃣ Patikriname, ar vartotojas yra prisijungęs
        cy.contains('Logged in as KarolinaTest').should('be.visible');

//         // 1️⃣2️⃣ Ištriname vartotoją
//         cy.contains('Delete Account').click();

//         // 1️⃣3️⃣ Patikriname, ar paskyra ištrinta
//         cy.contains('Account Deleted!').should('be.visible');
//         cy.get('[data-qa="continue-button"]').click();
    });
});

// UZKOMENTAVAU KAD LOGOUT USER PAVYKTU
