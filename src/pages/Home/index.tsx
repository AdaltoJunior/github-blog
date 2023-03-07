import { Link } from 'react-router-dom'

export function Home() {
  return (
    <main>
      <h1>Blog</h1>
      <Link to="/post" style={{ textDecoration: 'underline' }}>
        Ver post
      </Link>
    </main>
  )
}
