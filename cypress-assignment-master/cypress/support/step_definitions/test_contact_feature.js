/**
 * Created by Preksha Kasliwal
 */
 import { After, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
 import ContactPage from '../../pages/contactPage';
 const contactPage = new ContactPage();

 When('User submit form with details', () => {
    contactPage.fillFormDetails();
});
Then('User should see thanks contact message', () => {
    cy.get("div.contact").invoke('text').should('contain', 'Thanks for getting in touch')
});