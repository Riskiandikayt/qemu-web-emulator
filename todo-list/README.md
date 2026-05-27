# ✓ To-Do List App

A modern, feature-rich to-do list application with local storage functionality. Built with React, TypeScript, and Vite.

## 🎯 Features

### Core Functionality
- ✅ **Add/Edit/Delete Tasks** - Full CRUD operations
- 💾 **Local Storage** - All data persists automatically
- 🔍 **Search** - Find tasks by title or description
- 🏷️ **Categories** - Organize tasks by category
- 🎯 **Priority Levels** - Set High, Medium, or Low priority
- 📅 **Due Dates** - Set and track task deadlines
- ⏰ **Overdue Tracking** - Visual indicators for overdue tasks

### UI/UX Features
- 📊 **Statistics Dashboard** - Track total, completed, pending, and high-priority tasks
- 📈 **Progress Bar** - Visual representation of completion rate
- 🔄 **Multiple Sorting Options**
  - Newest/Oldest
  - By Priority
  - By Due Date
- 🎨 **Beautiful Design** - Modern purple gradient theme
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Smooth Animations** - Delightful transitions and effects

### Data Management
- 🔐 **Auto-save** - Changes saved to localStorage automatically
- 📋 **Inline Editing** - Edit tasks directly in the list
- 🗑️ **Bulk Clear** - Remove all completed tasks at once
- 💾 **Data Persistence** - All tasks persist across sessions

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd todo-list
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3001
```

## 🏗️ Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📂 Project Structure

```
todo-list/
├── src/
│   ├── components/
│   │   ├── TodoForm/          # Task input form with advanced options
│   │   ├── TodoList/          # Task list container
│   │   ├── TodoItem/          # Individual task component
│   │   ├── TodoStats/         # Statistics dashboard
│   │   └── TodoFilters/       # Filter and search controls
│   ├── utils/
│   │   ├── storage.ts         # LocalStorage operations
│   │   └── helpers.ts         # Utility functions
│   ├── types/
│   │   └── index.ts           # TypeScript interfaces
│   ├── App.tsx                # Main application component
│   ├── App.css                # App styles
│   ├── index.tsx              # React entry point
│   └── index.css              # Global styles
├── index.html                 # HTML template
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies
└── README.md                  # This file
```

## 💾 Local Storage

All tasks are automatically saved to the browser's localStorage under the key `todo-list-app-data`. The data is stored as a JSON array of task objects.

### Storage Structure
```json
[
  {
    "id": "todo-1234567890-abcd1234",
    "title": "Task title",
    "description": "Optional description",
    "completed": false,
    "priority": "high",
    "dueDate": "2024-12-31",
    "category": "Work",
    "createdAt": "2024-01-01T12:00:00.000Z",
    "updatedAt": "2024-01-01T12:00:00.000Z"
  }
]
```

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: #667eea to #764ba2 (Purple)
- **Accent Color**: #667eea (Blue)
- **Background**: White cards with subtle shadows
- **Text**: Dark gray (#333) on white

### Responsive Breakpoints
- **Desktop**: Full feature display
- **Tablet (600px)**: Adjusted layouts
- **Mobile (480px)**: Single column, compact design

## 🎮 How to Use

### Adding a Task
1. Type your task in the input field
2. Click the ➕ button or press Enter
3. Optional: Click "More options" to add description, priority, due date, and category

### Organizing Tasks
- **Filter**: Use filter buttons to view All, Active, or Completed tasks
- **Sort**: Choose from Newest, Oldest, Priority, or Due Date
- **Search**: Type to filter tasks by title or description

### Editing Tasks
1. Click on a task to enter edit mode
2. Modify the title and description
3. Click "Save" or "Cancel"

### Completing Tasks
- Check the checkbox to mark tasks as complete
- Completed tasks show with strikethrough text

### Managing Tasks
- **Edit**: Click the ✏️ button
- **Delete**: Click the 🗑️ button
- **Clear All Completed**: Click "Clear Completed" button

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 🔧 Technologies Used

- **React 18**: UI framework
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with gradients and animations
- **LocalStorage API**: Client-side data persistence

## 📝 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for suggestions.

## 👤 Author

Created by **Riskiandikayt**

## ⭐ Support

If you find this project useful, please give it a star!

---

**Stay organized and productive! 🚀**