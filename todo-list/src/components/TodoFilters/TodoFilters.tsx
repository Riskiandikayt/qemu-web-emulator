import React from 'react'
import { FilterType, SortType } from '../../types'
import './TodoFilters.css'

interface TodoFiltersProps {
  filter: FilterType
  setFilter: (filter: FilterType) => void
  sort: SortType
  setSort: (sort: SortType) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  completedCount: number
  onClearCompleted: () => void
}

const TodoFilters: React.FC<TodoFiltersProps> = ({
  filter,
  setFilter,
  sort,
  setSort,
  searchQuery,
  setSearchQuery,
  completedCount,
  onClearCompleted,
}) => {
  return (
    <div className="todo-filters">
      <div className="filters-top">
        <input
          type="text"
          placeholder="🔍 Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filters-controls">
        <div className="filter-group">
          <label>Filter:</label>
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="filter-group">
          <label>Sort:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value as SortType)} className="sort-select">
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="priority">Priority</option>
            <option value="dueDate">Due Date</option>
          </select>
        </div>

        {completedCount > 0 && (
          <button className="btn-clear-completed" onClick={onClearCompleted}>
            🗑️ Clear Completed ({completedCount})
          </button>
        )}
      </div>
    </div>
  )
}

export default TodoFilters