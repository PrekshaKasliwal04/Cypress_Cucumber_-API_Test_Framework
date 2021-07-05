Feature: Perform Automation Test for Online tests Admin

  Scenario: User should be able to login
  Given User visits base URL with path "/#/"
  And User enters login credentials
  When Login button clicked
    Then Text should contain heading "Room"

  Scenario: User should be able to save rooms
  Given User logged in with valid credentials
  When User saves room
  Then User should be re-directed to URL having "admin"
  And New room should be added in list