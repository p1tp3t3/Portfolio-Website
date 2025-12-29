import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://sbuvpomafbghiyvyqdyp.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNidXZwb21hZmJnaGl5dnlxZHlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU4Mjg5NjMsImV4cCI6MjA4MTQwNDk2M30._QC_rUjeUvClIOCe_BDr9tIOR8ccnWUEtobM8KDBYu8';

export const sb_db = createClient(supabaseUrl, supabaseAnonKey)