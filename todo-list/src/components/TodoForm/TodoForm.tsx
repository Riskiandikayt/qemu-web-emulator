import React, { useState } from 'react'
import { Todo } from '../../types'
import { generateId } from '../../utils/helpers'
import './TodoForm.css'

interface TodoFormProps {
  onAddTodo: (todo: Todo) => void
}

const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<'low' | 'medium' | 'high'>('medium')
  const [dueDate, setDueDate] = useState('')
  const [category, setCategory] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!title.trim()) {
      alert('Please enter a task title')
      return
    }

    const newTodo: Todo = {
      id: generateId(),
      title: title.trim(),
      description: description.trim() || undefined,
      completed: false,
      priority,
      dueDate: dueDate || undefined,
      category: category.trim() || undefined,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    onAddTodo(newTodo)

    // Reset form
    setTitle('')
    setDescription('')
    setPriority('medium')
    setDueDate('')
    setCategory('')
    setShowAdvanced(false)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-main">
        <input
          type="text"
          placeholder="Add a new task..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-input-title"
          maxLength={100}
        />
        <button type="submit" className="form-submit-btn" title="Add task">
          ➕
        </button>
      </div>

      {showAdvanced && (
        <div className="form-advanced">
          <textarea
            placeholder="Task description (optional)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            maxLength={500}
            rows={2}
          />

          <div className="form-row">
            <div className="form-group">
              <label>Priority</label>
              <select
                value={priority}
                onChange={(e) => setPriority(e.target.value as any)}
                className="form-select"
              >
                <option value="low">🟢 Low</option>
                <option value="medium">🟡 Medium</option>
                <option value="high">🔴 High</option>
              </select>
            </div>

            <div className="form-group">
              <label>Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="form-input-date"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Category (optional)</label>
            <input
              type="text"
              placeholder="Work, Personal, etc."
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-input"
              maxLength={30}
            />
          </div>
        </div>
      )}

      <button
        type="button"
        className="form-toggle-advanced"
        onClick={() => setShowAdvanced(!showAdvanced)}
      >
        {showAdvanced ? '⬆ Hide options' : '⬇ More options'}
      </button>
    </form>
  )
}

export default TodoForm