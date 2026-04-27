import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import TaskForm from './components/TaskForm'
import Filters from './components/Filters'
import useTasks from './hooks/useTasks'
import TaskList from './components/TaskList'
function App() {
  const {optimisticTasks, loading, handleAddTask, handleDelete} = useTasks();
  return (
    <>
      <h1>My Smart Task Manager</h1>
      <TaskForm onAdd={handleAddTask}></TaskForm>
      <SearchBar></SearchBar>
      <Filters></Filters>
      <TaskList tasks={optimisticTasks} onDelete={handleDelete}></TaskList>
    </>
  )
}

export default App