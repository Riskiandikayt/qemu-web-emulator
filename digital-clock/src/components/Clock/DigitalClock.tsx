import React, { useState, useEffect } from 'react'
import './DigitalClock.css'

interface TimeZoneClock {
  id: string
  name: string
  timezone: string
  utcOffset: string
  city: string
}

interface DigitalClockProps {
  is24Hour: boolean
}

const AVAILABLE_TIMEZONES: TimeZoneClock[] = [
  { id: 'nyc', name: 'New York', timezone: 'America/New_York', utcOffset: 'UTC-5/-4', city: 'NYC' },
  { id: 'london', name: 'London', timezone: 'Europe/London', utcOffset: 'UTC+0/+1', city: 'LON' },
  { id: 'tokyo', name: 'Tokyo', timezone: 'Asia/Tokyo', utcOffset: 'UTC+9', city: 'TYO' },
  { id: 'sydney', name: 'Sydney', timezone: 'Australia/Sydney', utcOffset: 'UTC+10/+11', city: 'SYD' },
  { id: 'dubai', name: 'Dubai', timezone: 'Asia/Dubai', utcOffset: 'UTC+4', city: 'DXB' },
  { id: 'singapore', name: 'Singapore', timezone: 'Asia/Singapore', utcOffset: 'UTC+8', city: 'SIN' },
  { id: 'hongkong', name: 'Hong Kong', timezone: 'Asia/Hong_Kong', utcOffset: 'UTC+8', city: 'HKG' },
  { id: 'mumbai', name: 'Mumbai', timezone: 'Asia/Kolkata', utcOffset: 'UTC+5:30', city: 'BOM' },
  { id: 'sao_paulo', name: 'São Paulo', timezone: 'America/Sao_Paulo', utcOffset: 'UTC-3/-2', city: 'GIG' },
  { id: 'moscow', name: 'Moscow', timezone: 'Europe/Moscow', utcOffset: 'UTC+3', city: 'MOW' },
  { id: 'la', name: 'Los Angeles', timezone: 'America/Los_Angeles', utcOffset: 'UTC-8/-7', city: 'LAX' },
  { id: 'bangkok', name: 'Bangkok', timezone: 'Asia/Bangkok', utcOffset: 'UTC+7', city: 'BKK' },
]

const DigitalClock: React.FC<DigitalClockProps> = ({ is24Hour }) => {
  const [selectedZones, setSelectedZones] = useState<TimeZoneClock[]>([
    AVAILABLE_TIMEZONES[0],
    AVAILABLE_TIMEZONES[1],
    AVAILABLE_TIMEZONES[2],
  ])
  const [times, setTimes] = useState<Record<string, string>>({})
  const [dates, setDates] = useState<Record<string, string>>({})

  useEffect(() => {
    const updateTime = () => {
      const newTimes: Record<string, string> = {}
      const newDates: Record<string, string> = {}

      selectedZones.forEach((zone) => {
        const date = new Date().toLocaleString('en-US', {
          timeZone: zone.timezone,
        })

        const dateObj = new Date(date)
        const hours = dateObj.getHours()
        const minutes = dateObj.getMinutes()
        const seconds = dateObj.getSeconds()

        // Format time
        if (is24Hour) {
          newTimes[zone.id] = `${String(hours).padStart(2, '0')}:${String(
            minutes
          ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        } else {
          const displayHours = hours % 12 || 12
          const period = hours >= 12 ? 'PM' : 'AM'
          newTimes[zone.id] = `${String(displayHours).padStart(2, '0')}:${String(
            minutes
          ).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`
        }

        // Format date
        const dayName = dateObj.toLocaleString('en-US', { weekday: 'short' })
        const monthName = dateObj.toLocaleString('en-US', { month: 'short' })
        const dayNum = dateObj.getDate()
        const year = dateObj.getFullYear()
        newDates[zone.id] = `${dayName}, ${monthName} ${dayNum}, ${year}`
      })

      setTimes(newTimes)
      setDates(newDates)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [selectedZones, is24Hour])

  const handleAddZone = (zone: TimeZoneClock) => {
    if (!selectedZones.find((z) => z.id === zone.id)) {
      setSelectedZones([...selectedZones, zone])
    }
  }

  const handleRemoveZone = (zoneId: string) => {
    if (selectedZones.length > 1) {
      setSelectedZones(selectedZones.filter((z) => z.id !== zoneId))
    }
  }

  const unselectedZones = AVAILABLE_TIMEZONES.filter(
    (zone) => !selectedZones.find((z) => z.id === zone.id)
  )

  return (
    <div className="digital-clock-container">
      <div className="clocks-grid">
        {selectedZones.map((zone) => (
          <div key={zone.id} className="clock-card">
            <div className="clock-header">
              <div>
                <h3 className="clock-city">{zone.name}</h3>
                <p className="clock-offset">{zone.utcOffset}</p>
              </div>
              {selectedZones.length > 1 && (
                <button
                  className="remove-btn"
                  onClick={() => handleRemoveZone(zone.id)}
                  title="Remove this timezone"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="clock-display">
              <div className="time">{times[zone.id] || '--:--:--'}</div>
              <div className="date">{dates[zone.id] || 'Loading...'}</div>
            </div>
          </div>
        ))}
      </div>

      {unselectedZones.length > 0 && (
        <div className="add-zones-section">
          <h3>Add More Time Zones</h3>
          <div className="zones-buttons">
            {unselectedZones.map((zone) => (
              <button
                key={zone.id}
                className="add-zone-btn"
                onClick={() => handleAddZone(zone)}
                title={`Add ${zone.name}`}
              >
                <span className="plus-icon">+</span>
                {zone.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default DigitalClock