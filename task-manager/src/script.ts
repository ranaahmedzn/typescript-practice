import { tasks, generateTasks, getNextTaskId } from "./seed"

const taskForm = document.getElementById("task-form") as HTMLFormElement
const taskInput = document.getElementById("new-task") as HTMLInputElement
const tasksList = document.getElementById("tasks-list") as HTMLDivElement
// const exportButton = document.getElementById("export-tasks") as HTMLButtonElement

function renderTasks(): void {
    tasksList.innerHTML = ""
    tasks.forEach(task => {
        const li = document.createElement("li")
        li.className = "task-list__item"

        const label = document.createElement("label")
        label.className = "task-list__label"
        if (task.status) {
            label.className = "task-list__label task-list__label--completed"
        }

        const check = document.createElement("input")
        check.type = "checkbox"
        check.checked = task.status
        check.addEventListener("change", () => {
            task.status = check.checked
            if (task.status) {
                label.className = "task-list__label task-list__label--completed"
            } else {
                label.className = "task-list__label"
            }
        })

        const span = document.createElement("span")
        span.innerText = task.title

        label.append(check, span)
        li.append(label)
        tasksList.append(li)
    })
}

taskForm.addEventListener("submit", (event) => {
    event.preventDefault()

    tasks.push({ id: getNextTaskId(), title: taskInput.value, status: false })
    taskInput.value = ""
    taskInput.focus()

    renderTasks()
})

// exportButton.addEventListener("click", () => {
//     console.log(tasks)
// })

// function deleteTask(): void {
//     console.log('will implement later...')
// }

generateTasks();
renderTasks();