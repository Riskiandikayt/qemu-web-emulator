import React, { useState } from 'react'
import { Todo } from '../../types'
import { formatDate, isOverdue } from '../../utils/helpers'
import './TodoItem.css'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onUpdate: (id: string, updates: Partial<Todo>) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(todo.title)
  const [editDescription, setEditDescription] = useState(todo.description || '')

  const handleSaveEdit = () => {
    if (!editTitle.trim()) {
      alert('Title cannot be empty')
      return
    }
    onUpdate(todo.id, {
      title: editTitle.trim(),
      description: editDescription.trim() || undefined,
    })
    setIsEditing(false)
  }

  const getPriorityIcon = (priority: string): string => {
    switch (priority) {
      case 'high':
        return '🔴'
      case 'medium':
        return '🟡'
      case 'low':
        return '🟢'
      default:
        return '⚪'
    }
  }

  const overdue = isOverdue(todo.dueDate || '')

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''} ${overdue && !todo.completed ? 'overdue' : ''}`}>
      <div className="todo-checkbox">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="checkbox-input"
        />
      </div>

      <div className="todo-content" onClick={() => !isEditing && setIsEditing(true)}>
        {isEditing ? (
          <div className="todo-edit-mode">
            <input
              type="text"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="edit-input-title"
              autoFocus
            />
            <textarea
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="edit-textarea"
              placeholder="Add description (optional)"
              rows={2}
            />
            <div className="edit-actions">
              <button onClick={handleSaveEdit} className="btn-save">
                ✓ Save
              </button>
              <button onClick={() => {
                setEditTitle(todo.title)
                setEditDescription(todo.description || '')
                setIsEditing(false)
              }} className="btn-cancel">
                ✕ Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="todo-title-section">
              <span className="priority-icon">{getPriorityIcon(todo.priority)}</span>
              <h3 className="todo-title">{todo.title}</h3>
              {todo.category && <span className="todo-category">{todo.category}</span>}
            </div>
            {todo.description && <p className="todo-description">{todo.description}</p>}
            <div className="todo-meta">
              {todo.dueDate && (
                <span className={`todo-date ${overdue && !todo.completed ? 'overdue-text' : ''}`}>
                  📅 {formatDate(todo.dueDate)}
                </span>
              )}
            </div>
          </>
        )}
      </div>

      <div className="todo-actions">
        {!isEditing && (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="btn-edit"
              title="Edit task"
            >
              ✏️
            </button>
            <button
              onClick={() => {
                if (window.confirm('Delete this task?')) {
                  onDelete(todo.id)
                }
              }}
              className="btn-delete"
              title="Delete task"
            >
              🗑️
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default TodoItem