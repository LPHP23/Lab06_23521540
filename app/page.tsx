import Link from 'next/link'

export default function HomePage() {
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        borderRadius: '24px',
        padding: '60px',
        maxWidth: '600px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        {/* Logo */}
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, #5B8DEF 0%, #8FB3F5 100%)',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 24px',
          fontSize: '36px'
        }}>
          📊
        </div>

        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700',
          color: '#2D3748',
          marginBottom: '12px'
        }}>
          Lab06 Dashboard
        </h1>
        
        <p style={{ 
          color: '#718096',
          fontSize: '1.125rem',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Professional Analytics & Management Platform<br/>
          Built with Next.js 16 & React 18
        </p>

        {/* Features */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
          marginBottom: '40px'
        }}>
          {[
            { icon: '📈', text: 'Analytics' },
            { icon: '👥', text: 'User Management' },
            { icon: '📝', text: 'Content Blog' },
            { icon: '🔒', text: 'Secure API' },
          ].map((item, i) => (
            <div key={i} style={{
              padding: '16px',
              background: '#F7F9FC',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ fontSize: '24px' }}>{item.icon}</span>
              <span style={{ fontWeight: '500', color: '#2D3748' }}>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link 
            href="/dashboard" 
            className="btn btn-primary"
            style={{ 
              padding: '14px 32px',
              fontSize: '16px',
              background: '#5B8DEF',
              color: 'white',
              borderRadius: '12px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'all 0.2s'
            }}
          >
            🚀 Enter Dashboard
          </Link>
          <Link 
            href="/blog" 
            className="btn btn-secondary"
            style={{ 
              padding: '14px 32px',
              fontSize: '16px',
              background: '#EDF2F7',
              color: '#2D3748',
              borderRadius: '12px',
              fontWeight: '600',
              textDecoration: 'none',
              border: '1px solid #E2E8F0'
            }}
          >
            📝 View Blog
          </Link>
        </div>

        {/* Footer */}
        <p style={{ 
          marginTop: '40px',
          fontSize: '14px',
          color: '#A0AEC0'
        }}>
          © 2025 Lab06 • Advanced Next.js Framework
        </p>
      </div>
    </div>
  )
}
