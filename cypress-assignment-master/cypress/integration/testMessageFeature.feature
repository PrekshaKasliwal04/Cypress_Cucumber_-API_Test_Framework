Feature: Perform Automation Test for Online tests Messages

  Scenario: User should be able to see unread messages bolded
  Given User visits base URL with path "/#/admin/messages"
  When User enters valid credentials
  Then User should see unread messages in bold