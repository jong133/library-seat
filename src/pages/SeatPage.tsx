import { useState } from 'react'
import SeatGrid from '../components/SeatGrid'
import SeatStatus from '../components/SeatStatus'

export default function SeatPage() {
  const [showGuide, setShowGuide] = useState(false)

  return (
    <div style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#1a365d', marginBottom: '8px' }}>도서관 좌석 예약 시스템</h2>

      <button
        onClick={() => setShowGuide(!showGuide)}
        style={{ marginBottom: '12px', padding: '6px 14px', cursor: 'pointer',
                 background: '#edf2f7', border: '1px solid #cbd5e0', borderRadius: '6px' }}
      >
        {showGuide ? '이용안내 닫기 ▲' : '이용안내 보기 ▼'}
      </button>

      {showGuide && (
        <div style={{ background: '#fffbeb', border: '1px solid #f6e05e',
                      borderRadius: '8px', padding: '12px', marginBottom: '16px', fontSize: '14px' }}>
          <p>🟢 초록색: 빈 좌석 (클릭하여 예약)</p>
          <p>🟣 보라색: 예약된 좌석 (60초 후 자동 해제)</p>
          <p>⏱ 보라색이 점점 옅어지며 잔여시간을 표시합니다</p>
          <p>🔑 테스트 계정: admin / 1234</p>
        </div>
      )}

      <SeatStatus />
      <SeatGrid />
    </div>
  )
}