import Link from 'next/link'
import data from '../data.json'

export default function Home() {
  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
