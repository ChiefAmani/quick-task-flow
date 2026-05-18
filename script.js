document.addEventListener('DOMContentLoaded', init);

let tasks = [];
const TASKS_STORAGE_KEY = 'taskflow_tasks';

function init() {
    loadTasks();
    renderTasks();

    document.getElementById('task-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const newTaskInput = document.getElementById('new-task-input');
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });
}

function loadTasks() {
    const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

function saveTasks() {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

function addTask(taskText) {
    const newTask = {
        id: Date.now().toString(), // Simple unique ID
        text: taskText,
        completed: false
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
}

function toggleTaskComplete(taskId) {
    tasks = tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    saveTasks();
    renderTasks();
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = ''; // Clear existing tasks

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.classList.toggle('completed', task.completed);

        const taskTextSpan = document.createElement('span');
        taskTextSpan.classList.add('task-text');
        taskTextSpan.textContent = task.text;
        taskTextSpan.addEventListener('click', () => toggleTaskComplete(task.id));

        const taskActionsDiv = document.createElement('div');
        taskActionsDiv.classList.add('task-actions');

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-button');
        completeButton.textContent = task.completed ? 'Undo' : 'Complete';
        completeButton.addEventListener('click', () => toggleTaskComplete(task.id));

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id));

        taskActionsDiv.appendChild(completeButton);
        taskActionsDiv.appendChild(deleteButton);

        listItem.appendChild(taskTextSpan);
        listItem.appendChild(taskActionsDiv);

        taskList.appendChild(listItem);
    });
}
