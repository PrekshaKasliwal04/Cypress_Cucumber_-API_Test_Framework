Feature: Perform Automation Test for Online tests Contact

  Scenario: User should be able to see success message
  Given User visits base URL with path ""
  When User submit form with details 
  Then User should see thanks contact message 
  And User logged in with valid credentials