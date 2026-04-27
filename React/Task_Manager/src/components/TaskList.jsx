import TaskItem from './TaskItem';

function TaskList({ tasks, onDelete }) {
    if (tasks.length === 0) {
        return <p className="empty-msg">No tasks yet. Start by adding one!</p>;
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}

export default TaskList;