import SettingsToggle from './SettingsToggle'
import Image from 'next/image'

async function getUserProfile() {
  await new Promise(r => setTimeout(r, 1500))
  return { name: 'Student', role: 'Admin' }
}

export default async function DashboardPage() {
  const user = await getUserProfile()

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <p>Role: {user.role}</p>
      
      <section style={{ marginTop: 20 }}>
        <h2>Image Optimization Demo</h2>
        {/* Using Next.js Image component for optimization */}
        <Image
          src="/large.jpg"
          alt="Optimized image"
          width={800}
          height={500}
          priority
        />
      </section>
      
      <SettingsToggle />
    </div>
  )
}
