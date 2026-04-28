import { supabase } from './supabase.js'

export async function login(email, password) {
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) throw error
  window.location.href = './calendar.html'
}

export async function register(email, password) {
  const { error } = await supabase.auth.signUp({
    email,
    password
  })
  if (error) throw error
  window.location.href = './calendar.html'
}

export async function requireAuth() {
  const { data } = await supabase.auth.getSession()
  if (!data.session) {
    window.location.href = './login.html'
  }
}

export async function logout() {
  await supabase.auth.signOut()
  window.location.href = './login.html'
}
