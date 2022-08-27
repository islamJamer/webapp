Feature: To Do webapp

    Background:
        Given I visit the "To Do" home page

    # @ignore
    Scenario: check page logo exists
        Then Page logo exists

    Scenario: check "Available todos" container title exists
        Then "Available todos" container title exists

    Scenario: check "Available todos" container input exists
        Then "Available todos" container input exists

    # @ignore
    Scenario Outline: check "Available todos" container footer contains <tabTitle>
        Then "Available todos" container footer contains <tabTitle>
        Scenarios:
        | tabTitle    |
        |  "All"      |
        | "Active"    |
        | "Complete"  |

    Scenario: A new todo is added to the "Available todos" container list
        When I type the todo name in the input
        Then A new todo is added to the "Available todos" container list

    @add-one-todo-usint-api
    Scenario: The todo is deleted from the "Available todos" container list
        When I click on the "Delete" utton of one todo item
        Then The todo is deleted from the "Available todos" container list