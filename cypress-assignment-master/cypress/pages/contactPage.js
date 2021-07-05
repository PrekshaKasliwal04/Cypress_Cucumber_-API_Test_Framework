import BasePage from './basePage.js'

export default class ContactPage extends BasePage {

    constructor() {
        super()
    }
    fillFormDetails() {
        cy.get('input[placeholder=\"Name\"]').type('TEST123');
        cy.get('input[placeholder=\"Email\"]').type('TEST123@TEST.COM');
        cy.get('input[placeholder=\"Phone\"]').type('01212121311');
        cy.get('input[placeholder=\"Subject\"]').type('TEsTEST');
        cy.get('textarea').type('TEsTESTTEsTESTTEsTEST');
        cy.xpath("//button[text()=\"Submit\"]").click();
        cy.wait(2000);
    }
}

