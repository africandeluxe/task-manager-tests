# Task Manager Test Suite
## Overview
This repository contains the test cases for a Task Manager application built using React. The application allows users to manage tasks by adding, editing, deleting, and marking tasks as complete or incomplete. It also includes functionality for filtering tasks and clearing all tasks.

The following test cases ensure the proper functioning of the different components of the application. The test suite focuses on unit and integration tests to verify core functionalities such as task manipulation, filtering, and task state management.

## Tests Overview
The test cases are divided into the following categories, corresponding to the key components of the application:

- TaskList Component
- TaskItem Component
- TaskForm Component
- TaskCounter Component
- TaskApp Component
- Filter Component
- DueDate Component
- ClearAllTasks Component

### 1. File: TaskList.test.tsx

The TaskList component is responsible for rendering a list of tasks. These tests cover the following functionality:

- Rendering tasks correctly.
- Handling interactions such as toggling task completion and editing titles.
- Checking the correct number of tasks in the list.
- Handling empty task lists.

Key Tests:

renders all tasks: Verifies that the correct number of tasks is displayed.
interactions affect multiple items: Tests that toggling task completion affects the correct number of tasks.
calls onEditTitle when a task title is edited: Ensures that editing a task title calls the correct function.

### 2. File: TaskItem.test.tsx

The TaskItem component manages the behavior of individual tasks, including editing, deleting, and toggling their completion state.

Key Tests:

- displays line-through when task is completed: Ensures the task is marked as completed (line-through) when necessary.
- toggles task completed state on checkbox click: Checks the task's state toggle when the checkbox is clicked.
- calls onEditTitle when the edit button is clicked: Ensures editing a task title works as expected.
- calls onDelete when the delete button is clicked: Verifies that the task is deleted when the delete button is clicked.

### 3. File: TaskForm.test.tsx

The TaskForm component allows users to add new tasks. These tests ensure the form works correctly, handles input validation, and prevents overly long task submissions.

Key Tests:

- allows input to be entered and submitted: Tests task submission functionality.
- prevents empty task submission: Verifies that an empty task cannot be submitted.
- prevents submission of overly long task titles: Ensures overly long titles are not submitted.

### 4. File: TaskCounter.test.tsx

The TaskCounter component displays the total number of tasks and the number of completed tasks. These tests check that the counter updates correctly based on the state of the task list.

Key Tests:

- displays zero state correctly: Ensures the counter shows 0 when no tasks are present.
- displays correct count when no tasks are completed: Tests that the counter reflects when no tasks are completed.

### 5. File: TaskApp.test.tsx

The TaskApp component integrates all the smaller components and handles task management. These tests cover the full workflow of adding, editing, deleting, and filtering tasks.

Key Tests:

- allows multiple tasks to be added: Ensures that multiple tasks can be added successfully.
- allows multiple tasks to be deleted: Verifies that tasks can be deleted.
- adds a task and updates list and counter: Ensures that adding a task updates both the list and the task counter correctly.
- filters tasks correctly when "Completed" is selected: Tests the task filtering functionality.

### 6. File: Filter.test.tsx

The Filter component provides options to filter tasks based on their completion state (All, Completed, Incomplete). These tests ensure that the correct filter is applied based on user interaction.

Key Tests:

- calls onFilterChange with correct filter type when a button is clicked: Ensures that the correct filter is applied when the user clicks the respective button.

### 7. File: DueDate.test.tsx

The DueDate component allows users to set or change the due date for tasks. This test verifies that the correct date is passed back when the date is changed.

Key Tests:

- calls onDateChange with the correct date when date is changed: Ensures the due date is updated properly when the user changes it.

### 8. File: ClearAllTasks.test.tsx

The ClearAllTasks component provides functionality to remove all tasks from the list. These tests ensure that the clear all functionality works as expected and the button can be disabled when there are no tasks.

Key Tests:

- calls onClearAll when the button is clicked: Ensures that all tasks are cleared when the "Clear All Tasks" button is clicked.
- disables clear all button when no tasks exist: Ensures the clear button is disabled when there are no tasks in the list.
