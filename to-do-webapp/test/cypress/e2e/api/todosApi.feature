Feature: To Do webapp - API

    # @ignore
    @create-new-todo
    @delete-created-todo
    Scenario: check get single todo
        Then get single todo

    @delete-created-todo
    Scenario: check a new todo is created
        Then A new todo is created

    @create-new-todo
    Scenario: check todo is deleted
        Then todo is deleted

    @create-new-todo
    @delete-created-todo
    Scenario: check todo is updated
        Then todo is updated
