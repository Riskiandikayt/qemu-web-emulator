import { Todo, TodoStats, FilterType, SortType } from '../types'

export const generateId = (): string => {
  return `todo-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
}

export const formatDate = (date: string): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

export const formatDateTime = (date: string): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const isOverdue = (dueDate: string): boolean => {
  if (!dueDate) return false
  return new Date(dueDate) < new Date() && !isToday(dueDate)
}

export const isToday = (date: string): boolean => {
  const today = new Date()
  const d = new Date(date)
  return (
    d.getFullYear() === today.getFullYear() &&
    d.getMonth() === today.getMonth() &&
    d.getDate() === today.getDate()
  )
}

export const filterTodos = (todos: Todo[], filter: FilterType): Todo[] => {
  switch (filter) {
    case 'active':
      return todos.filter((t) => !t.completed)
    case 'completed':
      return todos.filter((t) => t.completed)
    default:
      return todos
  }
}

export const sortTodos = (todos: Todo[], sort: SortType): Todo[] => {
  const sorted = [...todos]
  switch (sort) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime())
    case 'priority':
      const priorityOrder = { high: 0, medium: 1, low: 2 }
      return sorted.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority])
    case 'dueDate':
      return sorted.sort((a, b) => {
        if (!a.dueDate) return 1
        if (!b.dueDate) return -1
        return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
      })
    default:
      return sorted
  }
}

export const getStats = (todos: Todo[]): TodoStats => {
  return {
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    pending: todos.filter((t) => !t.completed).length,
    highPriority: todos.filter((t) => t.priority === 'high' && !t.completed).length,
  }
}