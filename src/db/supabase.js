import {createClient} from "@supabase/supabase-js";

export const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
const { data: buckets, error } = await supabase.storage.listBuckets();

if (error) {
  console.error("Error listing buckets:", error.message);
} else {
  console.log("Buckets:", buckets);
}
export default supabase;
