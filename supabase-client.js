const SUPABASE_URL = 'https://uqdnhiygwlxgonuldpjf.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LqbaTltXjdSTF5OOsmL0tQ_ZPvucmdO';

let supabaseClient = null;

if (typeof supabase === 'undefined') {
  console.warn(
    'Supabase SDK not loaded. Please include the SDK CDN in your HTML:\n' +
    '<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>'
  );
} else {
  supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('NeoKonect: Supabase client initialized successfully.');
}

window.supabaseClient = supabaseClient;
window.SUPABASE_URL = SUPABASE_URL;
window.SUPABASE_ANON_KEY = SUPABASE_ANON_KEY;
