import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = 'https://zjdrycrsvnahclbkqtat.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || 'default_supabase_key';

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
