# Time Tracker

A functional web application designed to manage weekly tasks and monitor time allocation. This project allows users to track their productivity and identify "bad" habits by moving tasks between two distinct lists, all while staying within the 168-hour weekly limit.

# Project Overview

The application serves as a tool for time budgeting. It uses a centralized JavaScript state to manage data, ensuring that the UI and the underlying logic stay synchronized. By using a single source of truth (the taskList array), the app can dynamically calculate totals and move items between categories without page reloads.

# Key Logic and Features

Weekly Limit Validation: The system checks if a new task will push the total beyond 168 hours before allowing it to be added.

State-Driven UI: The tables are generated dynamically. Whenever a task is added, deleted, or switched, the display functions re-filter the array and re-render the HTML.

Unique ID System: A custom alphanumeric generator creates 6-character IDs, allowing for precise manipulation of specific tasks.

Hour Calculations: Utilizes the .reduce() method to provide real-time updates for both total allocated hours and "saved" hours (hours reclaimed from the bad list).

# Technical Implementation

Technologies Used
HTML5: For the structural layout.

Bootstrap 5: For responsive design, grid systems, and pre-styled components (Buttons, Tables, Forms).

Vanilla JavaScript: Handles all application logic, including event handling, state management, and DOM manipulation.

# Workflow Logic

Submission: handleOnSubmit captures form data using the FormData API and validates time constraints.

Filtering: Data is split into two views based on the type property (entry or bad).

Switching: The switchTask function updates the type of an object and triggers a re-render of both tables.

Deletion: Includes a confirmation prompt before removing data from the state.
