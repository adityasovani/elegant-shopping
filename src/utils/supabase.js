import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://zazvmgbzjrvgfditeyly.supabase.co'
const supabaseKey = process.env.REACT_APP_supabaseKey;
console.log(supabaseKey);
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;