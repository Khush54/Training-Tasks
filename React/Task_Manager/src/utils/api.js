export async function fetchTasks() {
    await new Promise(r => setTimeout(r,1000));
    return [
        { id: 1, title: "Learn React", completed: false},
        { id: 2, title: "Build Project", completed: true}
    ];
}

export async function addTasks(task) {
    await new Promise(r => setTimeout(r,1000))
    return {...task, id: Date.now()};
}