Feature: contact_us.feature

  Scenario: submitting the contact us form with all fields should persist to db properly
    Given I am on the contact us form
    When I submit the form with all required and all optional fields
    And I observe for 10 seconds
    Then the database should have the submission with accurate information