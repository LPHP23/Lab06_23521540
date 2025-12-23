import Link from 'next/link'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const mainNav = [
    { icon: '📊', label: 'Dashboard', href: '/dashboard', active: true },
    { icon: '📈', label: 'Analytics', href: '/dashboard' },
    { icon: '👥', label: 'Users', href: '/dashboard' },
    { icon: '📝', label: 'Blog', href: '/blog' },
  ]

  const settingsNav = [
    { icon: '⚙️', label: 'Settings', href: '/dashboard' },
    { icon: '🔔', label: 'Notifications', href: '/dashboard' },
    { icon: '🔒', label: 'Security', href: '/dashboard' },
  ]

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        {/* Logo */}
        <div className="sidebar-header">
          <Link href="/" className="sidebar-logo">
            <div className="sidebar-logo-icon">📊</div>
            <span className="sidebar-logo-text">Lab06</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-title">Main Menu</div>
            <ul>
              {mainNav.map((item, i) => (
                <li key={i} className="nav-item">
                  <Link href={item.href} className={`nav-link ${item.active ? 'active' : ''}`}>
                    <span className="nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav-section">
            <div className="nav-section-title">Settings</div>
            <ul>
              {settingsNav.map((item, i) => (
                <li key={i} className="nav-item">
                  <Link href={item.href} className="nav-link">
                    <span className="nav-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* User Profile */}
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">S</div>
            <div className="user-info">
              <div className="user-name">Student</div>
              <div className="user-role">Administrator</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <div className="header-title">
              <h1>Dashboard</h1>
              <p>Welcome back! Here&apos;s what&apos;s happening today.</p>
            </div>
          </div>

          <div className="header-right">
            <div className="search-box">
              <span>🔍</span>
              <input type="text" placeholder="Search anything..." />
            </div>
            <div className="header-icon">
              🔔
              <span className="notification-badge"></span>
            </div>
            <Link href="/" className="header-icon">🏠</Link>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          {children}
        </div>
      </main>
    </div>
  )
}
