import { create } from 'zustand'

export interface Seat {
  id: number
  x: number
  y: number
  seatNumber: string
  reserved: boolean
  reservedBy: string | null
  timeLeft: number
}

interface SeatStore {
  seats: Seat[]
  isLoggedIn: boolean
  currentUser: string
  login: (id: string, password: string) => boolean
  logout: () => void
  reserveSeat: (seatId: number) => void
  cancelSeat: (seatId: number) => void
  tickTimer: (seatId: number) => void
}

const initialSeats: Seat[] = [
  { id: 1,  x: 50,  y: 50,  seatNumber: 'A1',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 2,  x: 50,  y: 120, seatNumber: 'A2',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 3,  x: 50,  y: 190, seatNumber: 'A3',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 4,  x: 50,  y: 260, seatNumber: 'A4',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 5,  x: 50,  y: 330, seatNumber: 'A5',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 6,  x: 190, y: 260, seatNumber: 'B1',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 7,  x: 260, y: 260, seatNumber: 'B2',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 8,  x: 330, y: 260, seatNumber: 'B3',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 9,  x: 400, y: 260, seatNumber: 'B4',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 10, x: 470, y: 260, seatNumber: 'B5',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 11, x: 190, y: 330, seatNumber: 'B6',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 12, x: 260, y: 330, seatNumber: 'B7',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 13, x: 330, y: 330, seatNumber: 'B8',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 14, x: 400, y: 330, seatNumber: 'B9',  reserved: false, reservedBy: null, timeLeft: 60 },
  { id: 15, x: 470, y: 330, seatNumber: 'B10', reserved: false, reservedBy: null, timeLeft: 60 },
]

const VALID_USERS: Record<string, string> = {
  admin: '1234',
  student1: 'pass1',
  student2: 'pass2',
}

export const useSeatStore = create<SeatStore>((set) => ({
  seats: initialSeats,
  isLoggedIn: false,
  currentUser: '',

  login: (id, password) => {
    if (VALID_USERS[id] === password) {
      set({ isLoggedIn: true, currentUser: id })
      return true
    }
    return false
  },

  logout: () => set({ isLoggedIn: false, currentUser: '' }),

  reserveSeat: (seatId) =>
    set((state) => ({
      seats: state.seats.map((seat) =>
        seat.id === seatId
          ? { ...seat, reserved: true, reservedBy: state.currentUser, timeLeft: 60 }
          : seat
      ),
    })),

  cancelSeat: (seatId) =>
    set((state) => ({
      seats: state.seats.map((seat) =>
        seat.id === seatId
          ? { ...seat, reserved: false, reservedBy: null, timeLeft: 60 }
          : seat
      ),
    })),

  tickTimer: (seatId) =>
    set((state) => ({
      seats: state.seats.map((seat) => {
        if (seat.id === seatId && seat.reserved) {
          const newTime = seat.timeLeft - 5
          if (newTime <= 0) {
            return { ...seat, reserved: false, reservedBy: null, timeLeft: 60 }
          }
          return { ...seat, timeLeft: newTime }
        }
        return seat
      }),
    })),
}))