import { createClient } from '@supabase/supabase-js';
const URL = 'https://vijhsegnplfskneamxww.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpamhzZWducGxmc2tuZWFteHd3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwOTE2NzQsImV4cCI6MjAwODY2NzY3NH0.O_Ruk8Bsl9Wx7G2aqYJunOhbpAg9jnOHRd2UcquipfU';

export const supabase = createClient(URL, API_KEY);