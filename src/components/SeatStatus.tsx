import { useSeatStore } from '../store/useSeatStore'

export default function SeatStatus() {
  const seats = useSeatStore((state) => state.seats)
  const total = seats.length
  const available = seats.filter((s) => !s.reserved).length

  return (
    <div style={{
      padding: '12px 20px',
      background: '#ebf8ff',
      borderRadius: '8px',
      marginBottom: '16px',
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#2b6cb0'
    }}>
      빈 좌석: {available} / {total}
    </div>
  )
}