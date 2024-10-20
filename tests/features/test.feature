Feature: Search and interact with a website

  Scenario: Perform a Google search and interact with a page
    Given User opens the Google homepage
    When User searches for "website"
    And User clicks on the first search result
    Then User interacts with the page