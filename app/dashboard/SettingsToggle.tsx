'use client'
import { useState } from 'react'

export default function SettingsToggle() {
  const [settings, setSettings] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    analytics: true,
  })

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const settingItems = [
    { 
      key: 'notifications' as const, 
      icon: '🔔', 
      label: 'Push Notifications',
      desc: 'Receive alerts and updates'
    },
    { 
      key: 'darkMode' as const, 
      icon: '🌙', 
      label: 'Dark Mode',
      desc: 'Switch to dark theme'
    },
    { 
      key: 'autoSave' as const, 
      icon: '💾', 
      label: 'Auto Save',
      desc: 'Automatically save changes'
    },
    { 
      key: 'analytics' as const, 
      icon: '📊', 
      label: 'Analytics',
      desc: 'Track usage data'
    },
  ]

  return (
    <div className="toggle-container">
      {settingItems.map(item => (
        <div key={item.key} className="toggle-item">
          <div className="toggle-info">
            <span className="toggle-icon">{item.icon}</span>
            <div>
              <div className="toggle-label">{item.label}</div>
              <div className="toggle-desc">{item.desc}</div>
            </div>
          </div>
          <button
            onClick={() => toggleSetting(item.key)}
            className={`toggle-switch ${settings[item.key] ? 'active' : ''}`}
            aria-label={`Toggle ${item.label}`}
          />
        </div>
      ))}
    </div>
  )
}
