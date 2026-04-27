import React from 'react'

function TaskItem({ task, onDelete }) {
  return (
  <div 
            className="task-item" 
            style={{ 
                opacity: task.sending ? 0.6 : 1, 
                transition: 'opacity 0.3s ease'
            }}
        >
            <div className="task-content">
                <p>{task.title}</p>
                {task.sending && <span className="sync-text">Syncing with AI...</span>}
            </div>
            
            <button 
                className="delete-btn" 
                onClick={() => onDelete(task.id)}
            >
                Delete
            </button>
        </div>
  )
}

export default TaskItem;