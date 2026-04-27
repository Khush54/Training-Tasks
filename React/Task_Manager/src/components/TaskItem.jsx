function TaskItem({ task, onDelete, onToggle }) {
  return (
    <div className={`task-card ${task.completed ? 'completed' : ''}`}>
      <div className="task-left">
        <div 
          className={`custom-checkbox ${task.completed ? 'checked' : ''}`} 
          onClick={() => onToggle(task.id)}
        >
          {task.completed && <span className="tick">✓</span>}
        </div>
        <span className="task-text">{task.title}</span>
      </div>
      
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}
export default TaskItem;