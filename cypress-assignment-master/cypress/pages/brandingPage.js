import BasePage from './basePage.js'

export default class BrandingPage extends BasePage {

    constructor() {
        super()
    }
    fillBrandingDetails() {
        cy.get('input.form-control').eq(0).type("Test");
        cy.get('#updateBranding').click();

        cy.wait(2000);
    }
    countCheck(){
        cy.get('.col-12 > .btn').its('length').then(elementCount => {
            if (elementCount === 1) { 
                expect(true).to.be.true;
            } else {
                expect(true).to.be.false;
            }
        });
    }

}

