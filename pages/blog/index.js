import Link from 'next/link'
import data from '../../data.json'

export default function BlogList() {
  const categories = ['All', 'Tutorial', 'Guide', 'News', 'Tips']
  
  return (
    <div style={{ minHeight: '100vh', background: '#F7F9FC' }}>
      {/* Header */}
      <header style={{
        background: 'white',
        borderBottom: '1px solid #E2E8F0',
        padding: '16px 0',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #5B8DEF 0%, #8FB3F5 100%)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>📊</div>
            <span style={{ fontSize: '1.25rem', fontWeight: '700', color: '#2D3748' }}>Lab06</span>
          </Link>
          <nav style={{ display: 'flex', gap: '32px' }}>
            <Link href="/" style={{ color: '#718096', fontWeight: '500' }}>Home</Link>
            <Link href="/dashboard" style={{ color: '#718096', fontWeight: '500' }}>Dashboard</Link>
            <Link href="/blog" style={{ color: '#5B8DEF', fontWeight: '500' }}>Blog</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div style={{
        background: 'linear-gradient(135deg, #5B8DEF 0%, #8FB3F5 100%)',
        padding: '80px 24px',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontSize: '2.5rem', color: 'white', marginBottom: '16px' }}>📝 Blog & Tutorials</h1>
        <p style={{ fontSize: '1.125rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto' }}>
          Learn Next.js with our comprehensive guides and tutorials
        </p>
      </div>

      {/* Categories */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px 0' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {categories.map((cat, i) => (
            <button key={i} style={{
              padding: '10px 20px',
              background: i === 0 ? '#5B8DEF' : 'white',
              color: i === 0 ? 'white' : '#718096',
              border: '1px solid #E2E8F0',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: '500',
              fontSize: '14px'
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '24px' }}>
          {data.map((post, i) => {
            const colors = ['#5B8DEF', '#6FCF97', '#F2C94C', '#9B59B6', '#E74C3C']
            const icons = ['📚', '🎨', '📁', '🚀', '⚡']
            const tags = ['Tutorial', 'Guide', 'Legacy', 'Featured', 'Tips']
            
            return (
              <Link key={post.id} href={`/blog/${post.id}`} style={{ textDecoration: 'none' }}>
                <article style={{
                  background: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}>
                  {/* Thumbnail */}
                  <div style={{
                    height: '180px',
                    background: `linear-gradient(135deg, ${colors[i]}20 0%, ${colors[i]}40 100%)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '64px'
                  }}>
                    {icons[i]}
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px' }}>
                    <div style={{
                      display: 'inline-block',
                      padding: '4px 12px',
                      background: `${colors[i]}15`,
                      color: colors[i],
                      borderRadius: '50px',
                      fontSize: '12px',
                      fontWeight: '600',
                      marginBottom: '12px'
                    }}>
                      {tags[i]}
                    </div>

                    <h3 style={{ 
                      fontSize: '1.25rem', 
                      fontWeight: '600',
                      color: '#2D3748',
                      marginBottom: '8px'
                    }}>
                      {post.title}
                    </h3>

                    <p style={{ 
                      color: '#718096', 
                      fontSize: '14px',
                      marginBottom: '16px',
                      lineHeight: '1.6'
                    }}>
                      {post.content}
                    </p>

                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          background: '#EDF2F7',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px'
                        }}>👤</div>
                        <span style={{ fontSize: '13px', color: '#718096' }}>Admin</span>
                      </div>
                      <span style={{ fontSize: '13px', color: '#A0AEC0' }}>5 min read</span>
                    </div>
                  </div>
                </article>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        background: '#2D3748',
        color: 'white',
        padding: '40px 24px',
        marginTop: '40px'
      }}>
        <div style={{ 
          maxWidth: '1200px', 
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>© 2025 Lab06 Dashboard</p>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>Built with Next.js</p>
        </div>
      </footer>
    </div>
  )
}
