
import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";
import { SUPABASE_URL, SUPABASE_KEY } from "./config.js";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export async function slaRapportOp(rapportData) {
  const { error } = await supabase.from("rapport_gegevens").insert(rapportData);
  if (error) {
    console.error("Fout bij opslaan:", error);
    alert("Fout bij opslaan in Supabase.");
  } else {
    alert("Rapport succesvol opgeslagen!");
  }
}
