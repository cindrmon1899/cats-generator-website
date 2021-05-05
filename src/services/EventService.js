import { createClient } from "@supabase/supabase-js";
require("dotenv-flow").config();

const supabaseUrl = "https://pquqeicmdkarhgevtbeu.supabase.co";
const supabaseKey =
  process.env.SUPABASE_KEY || process.env.VUE_APP_SUPABASE_KEY;

const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default {
  fetchCatNames() {
    return supabaseClient.from("cat_names").select("name");
  },
  fetchCatTraits() {
    return supabaseClient.from("cat_traits").select("name");
  },
};
