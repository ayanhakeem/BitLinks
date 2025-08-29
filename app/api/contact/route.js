import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, query } = body;

    if (!email || !query) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // connect to MongoDB
    const client = await clientPromise;
    const db = client.db("bitlinks"); // use your DB name
    const collection = db.collection("contacts");

    // save data
    await collection.insertOne({
      email,
      query,
      createdAt: new Date(),
    });

    return new Response(
      JSON.stringify({ message: "Query saved successfully!" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
