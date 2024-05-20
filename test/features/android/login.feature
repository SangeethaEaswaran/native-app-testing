Feature:Android Saucelab testing
  Scenario: Android app 
    Given I am on the native android app
    When I add backpack product to my cart 
    And I procced to checkout product
    Then I should see the login screen