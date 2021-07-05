Feature: Perform Automation Test for Online tests Branding

  Scenario: User should be able to update branding
  Given User logged in with valid credentials
  And User visits base URL with path "/#/admin/branding"
  When Performs branding
  Then User should see branding count getting changed