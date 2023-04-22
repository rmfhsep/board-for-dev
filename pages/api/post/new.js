import { connectDB } from "@/util/database";

export default async function handler(req, res) {
    if(req.method === 'POST') {
        const post = req.body
        console.log("포스트", post)
        if(post.title === '' || post.content === '') {
            return res.status(500).json("FAIL");
        }

        try {
            const db = (await connectDB).db("forum")
            const result = await db.collection('post').insertOne(post)
            console.log("result", result);
            return res.status(200).json("OK")
        }
        catch (err){
            return (err)
        }
        
        
        
    }

}