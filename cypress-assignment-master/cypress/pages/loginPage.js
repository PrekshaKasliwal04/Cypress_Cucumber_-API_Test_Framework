import BasePage from './basePage.js'

export default class LoginPage extends BasePage {

    constructor() {
        super()
    }
    fillLoginCredentials() {
        cy.get('footer p a:nth-child(5)').click();
        cy.wait(1000);
        cy.xpath('//div[@class=\"form-group\"][1]/input').click();
        cy.get('[data-testid=username]').type('admin');
        cy.get('[data-testid=password]').type('password');
        cy.wait(2000);
    }
    clickLoginButton(){
        cy.get('[data-testid=submit]').click();
        cy.wait(2000);
    }
    verifyTextPresent(expected){
        cy.wait(1000);
        cy.get('div.navbar-collapse').invoke('text').then(text => {
            expect(text).to.contain(expected);
        })
    } 
    logOut(){
        cy.wait(2000);
        cy.xpath('//a[@href=\"/#/admin\"]').click();
    }

}


