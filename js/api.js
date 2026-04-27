import { supabase } from './supabase.js'

export async function createBooking(payload) {
  const { data, error } = await supabase.rpc('create_booking', payload)
  if (error) throw error
  return data
}

export async function getBookings(date) {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('booking_date', date)

  if (error) throw error
  return data
}
