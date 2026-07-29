export interface Task {
    id?: number;
    title: string;
    status: boolean;
}

export const tasks: Task[] = []
let lastTaskId = 1

export function getNextTaskId(): number {
    return lastTaskId++;
}

export function generateTasks(): void {
    const initialTasks: Task[] = [
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
    ]

    initialTasks.forEach(task => {
        tasks.push({ id: lastTaskId++, title: task.title, status: task.status })
    })
}