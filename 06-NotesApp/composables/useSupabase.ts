import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmbXFjaW5uZXh1a2Fsam13a3Z2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE4MzUzODQsImV4cCI6MjAzNzQxMTM4NH0.KeTOd1voPPLbmvgZeaG_-lekzYPkwe5PaX5rDwFbd7c";
const SUPABASE_URL = "https://tfmqcinnexukaljmwkvv.supabase.co";

const useSupabase = () => {
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  return { supabase };
};

export default useSupabase;