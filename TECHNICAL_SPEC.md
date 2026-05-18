# TECHNICAL_SPEC.md

## Project Overview
TaskFlow is a dead-simple task management web application for freelancers. It provides a fast, no-login solution to manage tasks directly in the browser, leveraging local storage for data persistence. The application aims to solve the pain of complex task managers by offering extreme simplicity and privacy.

## Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript

## File Tree
- index.html
- style.css
- script.js

## Core Functionality (JavaScript)

### Data Persistence
- All task data stored in `localStorage` under a key (e.g., `taskflow_tasks`).
- Data structure: Array of objects, each object representing a task with properties like `id`, `text`, `completed`.

### Functions

#### `init()`
- Description: Initializes the application, loads tasks from `localStorage`, and renders them.
- Parameters: None
- Returns: void

#### `addTask(taskText)`
- Description: Adds a new task to the task list and `localStorage`.
- Parameters:
  - `taskText`: string (the content of the task)
- Returns: void

#### `toggleTaskComplete(taskId)`
- Description: Toggles the `completed` status of a task in the task list and `localStorage`.
- Parameters:
  - `taskId`: string (unique identifier for the task)
- Returns: void

#### `deleteTask(taskId)`
- Description: Removes a task from the task list and `localStorage`.
- Parameters:
  - `taskId`: string (unique identifier for the task)
- Returns: void

#### `renderTasks()`
- Description: Clears the current task display and re-renders all tasks from the internal task list to the DOM.
- Parameters: None
- Returns: void

## HTML Structure (`index.html`)
- `<!DOCTYPE html>` declaration.
- `<html lang="en">` with `<head>` and `<body>`.
- `<meta charset="UTF-8">`, `<meta name="viewport">` for responsiveness.
- `<title>`: "TaskFlow - Simple Task Manager"
- Link to `style.css` in `<head>`.
- Main content in `<body>`:
  - `<h1>` for application title.
  - `<form id="task-form">`:
    - `<input type="text" id="new-task-input" placeholder="Add a new task..." required>`
    - `<button type="submit">Add Task</button>`
  - `<ul id="task-list">` (container for tasks).
- Link to `script.js` at the end of `<body>`.

## CSS Styling (`style.css`)
- Minimal, clean design.
- Basic typography for readability.
- Styling for form elements (input, button).
- Styling for task list (`ul`, `li`):
  - Differentiate completed tasks (e.g., strikethrough, lighter color).
  - Styling for delete/complete buttons within tasks.
- Responsive design considerations (basic).

## Environment Variables
Not applicable.

## Dependencies
Not applicable (vanilla HTML, CSS, JavaScript).