const getStoredTasks = () => {
    const saved = localStorage.getItem('my_tasks');
    return saved ? JSON.parse(saved) : [
        { id: 1, title: "Learn React", completed: false },
        { id: 2, title: "Build Project", completed: true }
    ];
};

let mockTasks = getStoredTasks();

export async function fetchTasks() {
    await new Promise(r => setTimeout(r, 800));
    return [...mockTasks];
}

export async function addTasks(task) {
    await new Promise(r => setTimeout(r, 800));
    const newTask = { ...task, id: Date.now(), completed: false };
    mockTasks.push(newTask);
    localStorage.setItem('my_tasks', JSON.stringify(mockTasks));
    return newTask;
}

export async function toggleTaskApi(id) {
    await new Promise(r => setTimeout(r, 500));
    mockTasks = mockTasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    localStorage.setItem('my_tasks', JSON.stringify(mockTasks));
    return true;
}

