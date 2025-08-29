import clientPromise from "@/lib/mongodb"

export async function POST(request) {

    const body = await request.json() 
    const client = await clientPromise;
    const db = client.db("bitlinks")//create db bitlinks
    const collection = db.collection("url")//colletion

      // Check if the same short url already exists in db
    const doc = await collection.findOne({shorturl: body.shorturl})
    if(doc){
        return Response.json({success: false, error: true,  message: 'URL already exists!' })//send response
    }
   

    const result = await collection.insertOne({//store in db
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({success: true, error: false,  message: 'URL Generated Successfully' })//if no doc send success store in db
  }