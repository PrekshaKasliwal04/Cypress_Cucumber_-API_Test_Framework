/**
 * Created by Preksha Kasliwal
 */
 import { After, Given, When, Then} from "cypress-cucumber-preprocessor/steps";
 import LoginPage from '../../pages/loginPage';
 import BrandingPage from "../../pages/brandingPage";
 const loginPage = new LoginPage();
 const brandingPage = new  BrandingPage();

Given('User visits base URL with path {string}', (path) => {
    loginPage.navigate(path);
});

Given('User enters login credentials', () => {
    loginPage.fillLoginCredentials();
});
When('Login button clicked', () => {
    loginPage.clickLoginButton();
});
Then('Text should contain heading {string}', (expectedText) => {
    loginPage.verifyTextPresent(expectedText);
});

Given('User logged in with valid credentials', () => {
    loginPage.fillLoginCredentials();
    loginPage.clickLoginButton();
    loginPage.verifyTextPresent('Room');
});

When('User saves room', () => {
    cy.get('#roomNumber').type('110');
    cy.get('#roomPrice').type('110');
    cy.wait(2000);    
    cy.get('#createRoom').click();
});

Then('User should be re-directed to URL having {string}', (url) => {
    cy.wait(2000);
    loginPage.verifyURLContains(url);
});

Then('New room should be added in list', () => {
    cy.get('.detail').its('length').should('be.greaterThan', 1);
});
When('Performs branding', () => {
    brandingPage.fillBrandingDetails();
});

Then('User should see branding count getting changed', () => {
    brandingPage.countCheck();
    cy.get('.col-12 > .btn').click();
});

When('User enters valid credentials', () => {
    cy.xpath('//div[@class=\"form-group\"][1]/input').type('admin');
    cy.xpath('//div[@class=\"form-group\"][2]/input').type('password');
    cy.get('button.float-right').click();
});
Then('User should see unread messages in bold', () => {
    cy.wait(2000);
    cy.get('div.read-false').its('length').should('be.at.least', 1);
});

// this will get called after each scenario - We want to logout after each scenario
 After(() => {
    cy.wait(2000);
    cy.xpath('//a[@href=\"#/admin\"]').click();
  });