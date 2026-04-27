import React, { useEffect, useState, useOptimistic } from 'react'
import { addTasks, fetchTasks } from '../utils/api';
import { startTransition } from 'react';

function useTasks() {
  const [tasks, updateTasks] = useState([]);
  const [loading, updateLoading] = useState(false);
  const [err, watchErr] = useState(null);
  const [optimisticTasks, addOptimisticTask] = useOptimistic(tasks, (prev, newTask) => [...prev, newTask]);

  async function loadInitialTask() {
    updateLoading(true);
    const data = await fetchTasks();
    updateTasks(data);
    updateLoading(false);
  }

  async function handleAddTask(title) {
    const tempTask = { title, id: Date.now(), sending: true }
    startTransition(() => {
      addOptimisticTask(tempTask);
    })
    const add = await addTasks({ title, completed: false });
    updateTasks(tasks => [...tasks, add])
  }

  async function handleDelete(id) {
    const newTasks = tasks.filter(i => i.id != id)
    updateTasks(newTasks)
  }

  useEffect(() => {
    loadInitialTask()
  }, [])

  async function handleToggle(id) {
    updateTasks(prev => prev.map(t => 
        t.id === id ? { ...t, completed: !t.completed } : t
    ));
    
    try {
        await toggleTaskApi(id);
    } catch (e) {
        console.error("Toggle failed", e);
    }
}

  return { optimisticTasks, loading, handleAddTask, handleDelete, handleToggle };
}

export default useTasks