import React from 'react'
import { Todo } from '../../types'
import { getStats } from '../../utils/helpers'
import './TodoStats.css'

interface TodoStatsProps {
  todos: Todo[]
}

const TodoStats: React.FC<TodoStatsProps> = ({ todos }) => {
  const stats = getStats(todos)
  const completionRate = todos.length > 0 ? Math.round((stats.completed / stats.total) * 100) : 0

  return (
    <div className="todo-stats">
      <div className="stat-item">
        <div className="stat-icon">📊</div>
        <div className="stat-content">
          <span className="stat-label">Total Tasks</span>
          <span className="stat-value">{stats.total}</span>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon">✓</div>
        <div className="stat-content">
          <span className="stat-label">Completed</span>
          <span className="stat-value">{stats.completed}</span>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon">⏳</div>
        <div className="stat-content">
          <span className="stat-label">Pending</span>
          <span className="stat-value">{stats.pending}</span>
        </div>
      </div>

      <div className="stat-item">
        <div className="stat-icon">🔥</div>
        <div className="stat-content">
          <span className="stat-label">High Priority</span>
          <span className="stat-value">{stats.highPriority}</span>
        </div>
      </div>

      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${completionRate}%` }}></div>
      </div>
      <p className="progress-text">{completionRate}% complete</p>
    </div>
  )
}

export default TodoStats