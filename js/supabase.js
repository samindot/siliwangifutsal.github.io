import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://fqfitztfunetlxuequuz.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZxZml0enRmdW5ldGx4dWVxdXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzcyOTc0NzEsImV4cCI6MjA5Mjg3MzQ3MX0.uGYAGCEGyIcfI47ZEOs467xoWiHb6KoBbibOt7kd84E'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
