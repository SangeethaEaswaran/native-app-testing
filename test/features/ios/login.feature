Feature:ios Saucelab testing
  Scenario: Test ios app 
    Given I am on the native ios app
    When I add product to my cart 
    And I procced to checkout 
    Then I should see login screen