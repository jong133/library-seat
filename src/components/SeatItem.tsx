import { Seat } from '../store/useSeatStore'

interface SeatItemProps {
  seat: Seat
  onClick: (seat: Seat) => void
}

export default function SeatItem({ seat, onClick }: SeatItemProps) {
  const ratio = seat.timeLeft / 60

  let bgColor = '#48bb78'
  if (seat.reserved) {
    const purple = Math.round(128 + (1 - ratio) * 50)
    bgColor = `rgb(${Math.round(ratio * 150)}, 0, ${purple})`
  }

  return (
    <div
      onClick={() => onClick(seat)}
      title={seat.reserved
        ? `${seat.reservedBy} 예약중 (${seat.timeLeft}초 남음)`
        : '클릭하여 예약'}
      style={{
        position: 'absolute',
        left: seat.x,
        top: seat.y,
        width: '60px',
        height: '60px',
        background: bgColor,
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '13px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        transition: 'background 0.5s',
        userSelect: 'none',
      }}
    >
      <span>{seat.seatNumber}</span>
      {seat.reserved && (
        <span style={{ fontSize: '10px', marginTop: '2px' }}>{seat.timeLeft}s</span>
      )}
    </div>
      )
}