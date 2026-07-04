import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

const hasConfig = !!(supabaseUrl && supabaseAnonKey);

export const supabase = hasConfig
  ? createClient(supabaseUrl, supabaseAnonKey)
  : (null as any);

export interface Message {
  id: string;
  name: string;
  content: string;
  created_at: string;
}

export async function getMessages(): Promise<Message[]> {
  if (!hasConfig) return [];
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching messages:", error);
    return [];
  }
  return data || [];
}

export async function addMessage(name: string, content: string) {
  if (!hasConfig) throw new Error("Supabase not configured");
  const { error } = await supabase.from("messages").insert([
    { name, content },
  ]);

  if (error) {
    console.error("Error adding message:", error);
    throw new Error(error.message);
  }
}
