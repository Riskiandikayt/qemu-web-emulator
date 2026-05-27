import { Todo } from '../types'

const STORAGE_KEY = 'todo-list-app-data'

export const storageUtils = {
  // Get all todos from localStorage
  getAllTodos: (): Todo[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      return data ? JSON.parse(data) : []
    } catch (error) {
      console.error('Error reading from localStorage:', error)
      return []
    }
  },

  // Save all todos to localStorage
  saveTodos: (todos: Todo[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  },

  // Add a new todo
  addTodo: (todo: Todo): void => {
    const todos = storageUtils.getAllTodos()
    todos.push(todo)
    storageUtils.saveTodos(todos)
  },

  // Update a todo
  updateTodo: (id: string, updates: Partial<Todo>): void => {
    const todos = storageUtils.getAllTodos()
    const index = todos.findIndex((t) => t.id === id)
    if (index !== -1) {
      todos[index] = { ...todos[index], ...updates, updatedAt: new Date().toISOString() }
      storageUtils.saveTodos(todos)
    }
  },

  // Delete a todo
  deleteTodo: (id: string): void => {
    const todos = storageUtils.getAllTodos()
    const filtered = todos.filter((t) => t.id !== id)
    storageUtils.saveTodos(filtered)
  },

  // Clear all todos
  clearAllTodos: (): void => {
    localStorage.removeItem(STORAGE_KEY)
  },

  // Export todos as JSON
  exportTodos: (): string => {
    const todos = storageUtils.getAllTodos()
    return JSON.stringify(todos, null, 2)
  },

  // Import todos from JSON
  importTodos: (jsonData: string): boolean => {
    try {
      const todos = JSON.parse(jsonData)
      if (Array.isArray(todos)) {
        storageUtils.saveTodos(todos)
        return true
      }
      return false
    } catch (error) {
      console.error('Error importing todos:', error)
      return false
    }
  },
}