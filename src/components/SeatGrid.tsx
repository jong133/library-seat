import { useState, useEffect, useCallback } from 'react'
import { useSeatStore, Seat } from '../store/useSeatStore'
import SeatItem from './SeatItem'
import LoginModal from './LoginModal'

export default function SeatGrid() {
  const { seats, isLoggedIn, currentUser, reserveSeat, cancelSeat, tickTimer } = useSeatStore()
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>(null)
  const [showLogin, setShowLogin] = useState(false)

  // Hook 1: useCallback — 좌석 클릭 핸들러 메모이제이션
  const handleSeatClick = useCallback((seat: Seat) => {
    if (seat.reserved) {
      if (seat.reservedBy === currentUser) {
        if (window.confirm(`${seat.seatNumber} 예약을 취소할까요?`)) {
          cancelSeat(seat.id)
        }
      } else {
        alert(`${seat.reservedBy}님이 예약한 좌석입니다.`)
      }
      return
    }
    setSelectedSeat(seat)
    if (!isLoggedIn) {
      setShowLogin(true)
    } else {
      reserveSeat(seat.id)
    }
  }, [isLoggedIn, currentUser, reserveSeat, cancelSeat])

  // Hook 2: useEffect — 5초마다 타이머 감소
  useEffect(() => {
    const timer = setInterval(() => {
      seats.forEach((seat) => {
        if (seat.reserved) tickTimer(seat.id)
      })
    }, 5000)
    return () => clearInterval(timer)
  }, [seats, tickTimer])

  const handleLoginSuccess = () => {
    setShowLogin(false)
    if (selectedSeat) {
      reserveSeat(selectedSeat.id)
      setSelectedSeat(null)
    }
  }

  return (
    <div>
      <div style={{
        position: 'relative',
        width: '600px',
        height: '450px',
        border: '2px solid #e2e8f0',
        borderRadius: '12px',
        background: '#f7fafc',
        margin: '0 auto',
      }}>
        {seats.map((seat) => (
          <SeatItem key={seat.id} seat={seat} onClick={handleSeatClick} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: '20px', marginTop: '16px', justifyContent: 'center' }}>
        <span>
          <span style={{ display: 'inline-block', width: '16px', height: '16px',
                         background: '#48bb78', borderRadius: '3px', marginRight: '6px' }}/>
          빈 좌석
        </span>
        <span>
          <span style={{ display: 'inline-block', width: '16px', height: '16px',
                         background: '#6b21a8', borderRadius: '3px', marginRight: '6px' }}/>
          예약됨
        </span>
      </div>

      {showLogin && selectedSeat && (
        <LoginModal
          seatNumber={selectedSeat.seatNumber}
          onSuccess={handleLoginSuccess}
          onClose={() => setShowLogin(false)}
        />
      )}
    </div>
  )
}