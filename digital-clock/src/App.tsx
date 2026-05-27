import React, { useState } from 'react'
import DigitalClock from './components/Clock/DigitalClock'
import './App.css'

function App() {
  const [is24Hour, setIs24Hour] = useState(false)

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>⏰ Digital Clock - Multiple Time Zones</h1>
        <p>View the current time across different time zones around the world</p>
      </header>

      <div className="controls">
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={is24Hour}
            onChange={(e) => setIs24Hour(e.target.checked)}
            className="toggle-checkbox"
          />
          <span>24-Hour Format</span>
        </label>
      </div>

      <DigitalClock is24Hour={is24Hour} />

      <footer className="app-footer">
        <p>Created with React & TypeScript | Time zones update in real-time</p>
      </footer>
    </div>
  )
}

export default App