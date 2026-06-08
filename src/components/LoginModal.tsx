import { useState } from 'react'
import { useSeatStore } from '../store/useSeatStore'

interface LoginModalProps {
  seatNumber: string
  onSuccess: () => void
  onClose: () => void
}

export default function LoginModal({ seatNumber, onSuccess, onClose }: LoginModalProps) {
  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [error, setError] = useState('')
  const login = useSeatStore((state) => state.login)

  const handleSubmit = () => {
    const ok = login(id, pw)
    if (ok) {
      onSuccess()
    } else {
      setError('아이디 또는 비밀번호가 틀렸습니다.')
    }
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000
    }}>
      <div style={{
        background: 'white', borderRadius: '12px', padding: '28px',
        width: '300px', boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
          <strong>좌석 예약 - {seatNumber}</strong>
          <span onClick={onClose} style={{ cursor: 'pointer', fontSize: '18px' }}>✕</span>
        </div>
        <input
          placeholder="학생 ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          style={inputStyle}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          style={inputStyle}
        />
        {error && (
          <p style={{ color: 'red', fontSize: '13px', marginBottom: '8px' }}>{error}</p>
        )}
        <button onClick={handleSubmit} style={btnStyle}>예약하기</button>
        <p style={{ fontSize: '11px', color: '#888', marginTop: '8px', textAlign: 'center' }}>
          테스트 계정: admin / 1234
        </p>
      </div>
    </div>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '10px', marginBottom: '10px',
  border: '1px solid #ddd', borderRadius: '6px', fontSize: '14px',
  boxSizing: 'border-box'
}

const btnStyle: React.CSSProperties = {
  width: '100%', padding: '10px', background: '#3182ce',
  color: 'white', border: 'none', borderRadius: '6px',
  fontSize: '15px', cursor: 'pointer', fontWeight: 'bold'
}