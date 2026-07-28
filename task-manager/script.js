"use strict";
const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("new-task");
const tasksList = document.getElementById("tasks-list");
// const exportButton = document.getElementById("export-tasks") as HTMLButtonElement
const tasks = [];
let lastTaskId = 1;
function generateTasks() {
    const initialTasks = [
        {
            title: "Buy Groceries",
            status: true
        },
        {
            title: "Finish TypeScript Homework",
            status: false
        },
        {
            title: "Call the dentist",
            status: false
        },
        {
            title: "Water the plants",
            status: true
        }
    ];
    initialTasks.forEach(task => {
        tasks.push({ id: lastTaskId++, title: task.title, status: task.status });
    });
}
function renderTasks() {
    tasksList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.className = "task-list__item";
        const label = document.createElement("label");
        label.className = "task-list__label";
        if (task.status) {
            label.className = "task-list__label task-list__label--completed";
        }
        const check = document.createElement("input");
        check.type = "checkbox";
        check.checked = task.status;
        check.addEventListener("change", () => {
            task.status = check.checked;
            if (task.status) {
                label.className = "task-list__label task-list__label--completed";
            }
            else {
                label.className = "task-list__label";
            }
        });
        const span = document.createElement("span");
        span.innerText = task.title;
        label.append(check, span);
        li.append(label);
        tasksList.append(li);
    });
}
taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    tasks.push({ id: lastTaskId++, title: taskInput.value, status: false });
    taskInput.value = "";
    taskInput.focus();
    renderTasks();
});
// exportButton.addEventListener("click", () => {
//     console.log(tasks)
// })
generateTasks();
renderTasks();
// console.log(tasks);
