export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: 200, background: '#eee' }}>
        <nav>
          <p><strong>Dashboard</strong></p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Overview</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main style={{ padding: 20 }}>{children}</main>
    </div>
  )
}
