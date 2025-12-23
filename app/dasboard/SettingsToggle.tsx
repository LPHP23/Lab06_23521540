'use client'
import { useState } from 'react'

export default function SettingsToggle() {
  const [dark, setDark] = useState(false)

  return (
    <div>
      <button onClick={() => setDark(!dark)}>
        Switch to {dark ? 'Light' : 'Dark'} Mode
      </button>
      <p>Current mode: {dark ? 'Dark' : 'Light'}</p>
    </div>
  )
}
