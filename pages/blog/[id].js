import data from '../../data.json'
import Link from 'next/link'

export default function BlogDetail({ post }) {
  if (!post) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: '#F7F9FC'
      }}>
        <div style={{ textAlign: 'center' }}>
          <span style={{ fontSize: '64px', display: 'block', marginBottom: '16px' }}>⏳</span>
          <h2 style={{ color: '#2D3748' }}>Loading...</h2>
        </div>
      </div>
    )
  }

  const colors = ['#5B8DEF', '#6FCF97', '#F2C94C', '#9B59B6', '#E74C3C']
  const icons = ['📚', '🎨', '📁', '🚀', '⚡']
  const tags = ['Tutorial', 'Guide', 'Legacy', 'Featured', 'Tips']
  const postIndex = parseInt(post.id) - 1

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
        background: `linear-gradient(135deg, ${colors[postIndex]}30 0%, ${colors[postIndex]}60 100%)`,
        padding: '80px 24px',
        textAlign: 'center'
      }}>
        <span style={{ fontSize: '80px', display: 'block', marginBottom: '24px' }}>
          {icons[postIndex]}
        </span>
        <div style={{
          display: 'inline-block',
          padding: '6px 16px',
          background: 'rgba(255,255,255,0.9)',
          color: colors[postIndex],
          borderRadius: '50px',
          fontSize: '13px',
          fontWeight: '600',
          marginBottom: '16px'
        }}>
          {tags[postIndex]}
        </div>
        <h1 style={{ fontSize: '2.5rem', color: '#2D3748', marginBottom: '16px' }}>
          {post.title}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px' }}>
          <span style={{ color: '#718096', fontSize: '14px' }}>👤 Admin</span>
          <span style={{ color: '#718096', fontSize: '14px' }}>📅 December 23, 2025</span>
          <span style={{ color: '#718096', fontSize: '14px' }}>⏱️ 5 min read</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '48px 24px' }}>
        <Link href="/blog" style={{ 
          display: 'inline-flex', 
          alignItems: 'center', 
          gap: '8px',
          color: '#718096',
          marginBottom: '32px',
          fontWeight: '500'
        }}>
          ← Back to Blog
        </Link>

        <article style={{
          background: 'white',
          borderRadius: '16px',
          padding: '48px',
          border: '1px solid #E2E8F0'
        }}>
          {/* Author */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            paddingBottom: '24px',
            borderBottom: '1px solid #E2E8F0',
            marginBottom: '32px'
          }}>
            <div style={{
              width: '56px',
              height: '56px',
              background: 'linear-gradient(135deg, #5B8DEF 0%, #8FB3F5 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: '600',
              fontSize: '20px'
            }}>A</div>
            <div>
              <div style={{ fontWeight: '600', color: '#2D3748', fontSize: '16px' }}>Admin</div>
              <div style={{ color: '#718096', fontSize: '14px' }}>Full Stack Developer</div>
            </div>
          </div>

          {/* Content */}
          <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#4A5568' }}>
            <p style={{ marginBottom: '24px', fontSize: '18px', color: '#2D3748' }}>
              {post.content}
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px', color: '#2D3748' }}>
              Overview
            </h2>
            <p style={{ marginBottom: '24px' }}>
              This tutorial covers the essential concepts of Next.js development. 
              You&apos;ll learn about modern web development practices and how to build 
              production-ready applications.
            </p>

            <h2 style={{ fontSize: '1.5rem', marginTop: '40px', marginBottom: '16px', color: '#2D3748' }}>
              Key Concepts
            </h2>
            <ul style={{ paddingLeft: '24px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '12px' }}>✅ Server-side rendering (SSR)</li>
              <li style={{ marginBottom: '12px' }}>✅ Static site generation (SSG)</li>
              <li style={{ marginBottom: '12px' }}>✅ Incremental static regeneration (ISR)</li>
              <li style={{ marginBottom: '12px' }}>✅ API routes and middleware</li>
            </ul>

            <div style={{
              background: '#F7F9FC',
              padding: '24px',
              borderRadius: '12px',
              borderLeft: '4px solid #5B8DEF',
              marginTop: '32px'
            }}>
              <p style={{ margin: 0, fontStyle: 'italic', color: '#4A5568' }}>
                💡 <strong>Pro Tip:</strong> Use the App Router for new projects to take 
                advantage of React Server Components and improved data fetching patterns.
              </p>
            </div>
          </div>
        </article>

        {/* Navigation */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between',
          marginTop: '32px',
          gap: '16px'
        }}>
          {parseInt(post.id) > 1 && (
            <Link href={`/blog/${parseInt(post.id) - 1}`} style={{
              flex: 1,
              padding: '16px 24px',
              background: 'white',
              border: '1px solid #E2E8F0',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span>←</span>
              <span style={{ color: '#2D3748', fontWeight: '500' }}>Previous Post</span>
            </Link>
          )}
          {parseInt(post.id) < data.length && (
            <Link href={`/blog/${parseInt(post.id) + 1}`} style={{
              flex: 1,
              padding: '16px 24px',
              background: '#5B8DEF',
              borderRadius: '12px',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '12px',
              color: 'white'
            }}>
              <span style={{ fontWeight: '500' }}>Next Post</span>
              <span>→</span>
            </Link>
          )}
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

export async function getStaticPaths() {
  const paths = data.map(post => ({
    params: { id: post.id }
  }))
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const post = data.find(p => p.id === params.id)
  if (!post) {
    return { notFound: true }
  }
  return {
    props: { post },
    revalidate: 60
  }
}
