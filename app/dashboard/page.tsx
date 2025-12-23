import SettingsToggle from './SettingsToggle'
import Image from 'next/image'
import { Suspense } from 'react'

async function getUserStats() {
  await new Promise(r => setTimeout(r, 500))
  return {
    totalUsers: '24,589',
    revenue: '$48,290',
    orders: '1,243',
    growth: '23.5%'
  }
}

const stats = [
  { 
    icon: '👥', 
    label: 'Total Users', 
    value: '24,589', 
    change: '+12.5%', 
    positive: true,
    color: 'blue'
  },
  { 
    icon: '💰', 
    label: 'Revenue', 
    value: '$48,290', 
    change: '+8.2%', 
    positive: true,
    color: 'green'
  },
  { 
    icon: '📦', 
    label: 'Orders', 
    value: '1,243', 
    change: '-2.4%', 
    positive: false,
    color: 'yellow'
  },
  { 
    icon: '📈', 
    label: 'Growth', 
    value: '23.5%', 
    change: '+4.1%', 
    positive: true,
    color: 'purple'
  },
]

const activities = [
  { icon: '👤', text: 'New user registered', time: '2 min ago', color: 'blue' },
  { icon: '💳', text: 'Payment received $250', time: '15 min ago', color: 'green' },
  { icon: '📝', text: 'New blog post published', time: '1 hour ago', color: 'yellow' },
  { icon: '🔔', text: 'System update completed', time: '3 hours ago', color: 'blue' },
]

const projects = [
  { 
    icon: '🌐', 
    name: 'Website Redesign', 
    desc: 'UI/UX Project',
    status: 'active',
    progress: 75,
    color: '#5B8DEF'
  },
  { 
    icon: '📱', 
    name: 'Mobile App', 
    desc: 'iOS & Android',
    status: 'pending',
    progress: 45,
    color: '#6FCF97'
  },
  { 
    icon: '🔧', 
    name: 'API Integration', 
    desc: 'Backend Service',
    status: 'completed',
    progress: 100,
    color: '#F2C94C'
  },
]

export default function DashboardPage() {
  return (
    <div>
      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, i) => (
          <div key={i} className="stat-card">
            <div className={`stat-icon ${stat.color}`}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className={`stat-change ${stat.positive ? 'positive' : 'negative'}`}>
                {stat.positive ? '↑' : '↓'} {stat.change} vs last month
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="content-grid">
        {/* Chart */}
        <div className="chart-card">
          <div className="chart-header">
            <h3 className="chart-title">📈 Revenue Overview</h3>
            <select style={{ 
              padding: '8px 16px', 
              borderRadius: '8px', 
              border: '1px solid var(--border-light)',
              background: 'var(--bg-tertiary)',
              fontSize: '14px'
            }}>
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="chart-placeholder">
            <div className="chart-bars">
              {[65, 45, 80, 55, 90, 70, 85].map((height, i) => (
                <div 
                  key={i} 
                  className="chart-bar" 
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </div>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-around', 
            marginTop: '12px',
            color: 'var(--text-muted)',
            fontSize: '12px'
          }}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>

        {/* Activity */}
        <div className="activity-card">
          <div className="activity-header">
            <h3>🕐 Recent Activity</h3>
            <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: '12px' }}>
              View All
            </button>
          </div>
          {activities.map((activity, i) => (
            <div key={i} className="activity-item">
              <div className={`activity-icon ${activity.color}`}>
                {activity.icon}
              </div>
              <div className="activity-content">
                <div className="activity-text">{activity.text}</div>
                <div className="activity-time">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Table */}
      <div className="table-card">
        <div className="table-header">
          <h3>📋 Active Projects</h3>
          <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
            + New Project
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Status</th>
              <th>Progress</th>
              <th>Team</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, i) => (
              <tr key={i}>
                <td>
                  <div className="project-info">
                    <div className="project-icon" style={{ background: `${project.color}20` }}>
                      {project.icon}
                    </div>
                    <div>
                      <div className="project-name">{project.name}</div>
                      <div className="project-desc">{project.desc}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span className={`status-badge ${project.status}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: `${project.progress}%`, background: project.color }} />
                    </div>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{project.progress}%</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: 'flex' }}>
                    {['👨‍💻', '👩‍💻', '🧑‍💻'].map((emoji, j) => (
                      <div key={j} style={{
                        width: '28px',
                        height: '28px',
                        background: '#EDF2F7',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: j > 0 ? '-8px' : '0',
                        border: '2px solid white',
                        fontSize: '14px'
                      }}>
                        {emoji}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '24px' }}>
        {/* Settings */}
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>⚙️ Quick Settings</h3>
          <SettingsToggle />
        </div>

        {/* Image Demo */}
        <div className="card">
          <h3 style={{ marginBottom: '20px' }}>🖼️ Media Preview</h3>
          <div className="image-card">
            <Image
              src="/large.jpg"
              alt="Dashboard preview"
              width={800}
              height={500}
              priority
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <p style={{ marginTop: '12px', fontSize: '13px' }}>
            Optimized image using Next.js Image component
          </p>
        </div>
      </div>
    </div>
  )
}
