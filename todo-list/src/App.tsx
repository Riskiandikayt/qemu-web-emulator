import React, { useState, useEffect } from 'react'
import TodoList from './components/TodoList/TodoList'
import TodoForm from './components/TodoForm/TodoForm'
import TodoStats from './components/TodoStats/TodoStats'
import TodoFilters from './components/TodoFilters/TodoFilters'
import { Todo, FilterType, SortType } from './types'
import { storageUtils } from './utils/storage'
import { filterTodos, sortTodos } from './utils/helpers'
import './App.css'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [sort, setSort] = useState<SortType>('newest')
  const [searchQuery, setSearchQuery] = useState('')
  const [showCompleted, setShowCompleted] = useState(true)

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = storageUtils.getAllTodos()
    setTodos(savedTodos)
  }, [])

  // Save todos to localStorage whenever they change
  useEffect(() => {
    storageUtils.saveTodos(todos)
  }, [todos])

  const handleAddTodo = (newTodo: Todo) => {
    setTodos([newTodo, ...todos])
  }

  const handleToggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleUpdateTodo = (id: string, updates: Partial<Todo>) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, ...updates, updatedAt: new Date().toISOString() }
          : todo
      )
    )
  }

  const handleClearCompleted = () => {
    if (window.confirm('Are you sure you want to delete all completed todos?')) {
      setTodos(todos.filter((todo) => !todo.completed))
    }
  }

  // Apply filters and search
  let displayedTodos = filterTodos(todos, filter)
  displayedTodos = sortTodos(displayedTodos, sort)
  displayedTodos = displayedTodos.filter(
    (todo) =>
      todo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (todo.description && todo.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>✓ My Tasks</h1>
        <p>Stay organized and productive</p>
      </header>

      <TodoStats todos={todos} />

      <TodoForm onAddTodo={handleAddTodo} />

      <TodoFilters
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        completedCount={todos.filter((t) => t.completed).length}
        onClearCompleted={handleClearCompleted}
      />

      <TodoList
        todos={displayedTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
        onUpdate={handleUpdateTodo}
      />

      {todos.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">📝</div>
          <p>No tasks yet. Create one to get started!</p>
        </div>
      )}

      {todos.length > 0 && displayedTodos.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">🔍</div>
          <p>No tasks match your filter or search.</p>
        </div>
      )}
    </div>
  )
}

export default App