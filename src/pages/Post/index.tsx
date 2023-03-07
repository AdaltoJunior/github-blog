import { Link } from 'react-router-dom'

export function Post() {
  return (
    <main>
      <h1>Post</h1>
      <Link to="/" style={{ textDecoration: 'underline' }}>
        Voltar
      </Link>
    </main>
  )
}
