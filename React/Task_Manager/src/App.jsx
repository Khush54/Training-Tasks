import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import TaskForm from './components/TaskForm'
import Filters from './components/Filters'
import useTasks from './hooks/useTasks'
import TaskList from './components/TaskList'
import useDebouncedSearch from './hooks/useDebouncedSearch';
import { useState, useDeferredValue, useMemo } from 'react';


function App() {
  const { optimisticTasks, loading, handleAddTask, handleDelete, handleToggle } = useTasks();

  // States for Searching and Filtering
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebouncedSearch(searchQuery, 300);
  const [filter, setFilter] = useState("All");

  // Step 7: Deferred Value for smooth typing
  const deferredQuery = useDeferredValue(searchQuery);

  // Step 8: Memoized Filtering (Performance Boost)
 const filteredTasks = useMemo(() => {
    return optimisticTasks.filter(task => {
      const matchesFilter = filter === "All" ? true : (filter === "Completed" ? task.completed : !task.completed);
      const matchesSearch = task.title.toLowerCase().includes(debouncedSearch.toLowerCase());
      return matchesFilter && matchesSearch;
    });
}, [optimisticTasks, filter, debouncedSearch]);

  return (
    <>
      <h1>My Smart Task Manager</h1>
      <TaskForm onAdd={handleAddTask} />

      {/* SearchBar aur Filters ko props pass karein */}
      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      <Filters activeFilter={filter} setFilter={setFilter} />

      {/* Ab 'filteredTasks' pass karein na ki 'optimisticTasks' */}
      <TaskList
        tasks={filteredTasks}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </>
  );
}

export default App