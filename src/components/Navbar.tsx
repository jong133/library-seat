import { Link } from 'react-router-dom'
import { useSeatStore } from '../store/useSeatStore'

export default function Navbar() {
  const { isLoggedIn, currentUser, logout } = useSeatStore()

  return (
    <nav style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '12px 24px', background: '#1a365d', color: 'white'
    }}>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }}>
          Home
        </Link>
        <Link to="/seat" style={{ color: '#90cdf4', textDecoration: 'none' }}>
          좌석 예약
        </Link>
      </div>
      <div style={{ fontSize: '14px' }}>
        {isLoggedIn ? (
          <span>
            {currentUser} 님 &nbsp;
            <button onClick={logout}
              style={{ background: '#e53e3e', color: 'white', border: 'none',
                       borderRadius: '4px', padding: '4px 10px', cursor: 'pointer' }}>
              로그아웃
            </button>
          </span>
        ) : (
          <span style={{ color: '#a0aec0' }}>로그인 필요</span>
        )}
      </div>
    </nav>
  )
}