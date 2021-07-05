/**
 * Created by Preksha Kasliwal
 */
 export default class BasePage {

    baseUrl       = "https://automationintesting.online";
    
    navigate(path) {
       cy.visit(this.baseUrl + path); 
    }
    getPageTitle() {
        return cy.title()
    }
    verifyURLContains(text){
        cy.url().should('include', text);
    }

}