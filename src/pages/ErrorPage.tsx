import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <div style={{ padding: '80px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '40px', color: '#e53e3e', marginBottom: '16px' }}>
        접속할 수 없는 URL 입니다.
      </h1>
      <Link to="/" style={{ color: '#3182ce', fontSize: '18px' }}>
        Home으로 이동
      </Link>
    </div>
  )
}