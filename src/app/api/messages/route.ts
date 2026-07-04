import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";
const hasConfig = !!(supabaseUrl && supabaseServiceKey);

export async function POST(request: Request) {
  if (!hasConfig) {
    return Response.json({ error: "Supabase not configured" }, { status: 503 });
  }

  try {
    const { name, content } = await request.json();

    if (!name?.trim() || !content?.trim()) {
      return Response.json({ error: "Name and content are required" }, { status: 400 });
    }

    if (name.trim().length > 30 || content.trim().length > 500) {
      return Response.json({ error: "Content too long" }, { status: 400 });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error } = await supabase.from("messages").insert([
      { name: name.trim(), content: content.trim() },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return Response.json({ error: "Failed to save message" }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 201 });
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function GET() {
  if (!hasConfig) {
    return Response.json([], { status: 200 });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(50);

    if (error) {
      console.error("Supabase select error:", error);
      return Response.json({ error: "Failed to fetch messages" }, { status: 500 });
    }

    return Response.json(data || []);
  } catch {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
