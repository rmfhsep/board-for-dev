import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";


export default async function handler (req, res) {
    if(req.method === "POST") {
      const session = await getServerSession(req,res,authOptions)
        const id = req.body
        const db = (await connectDB).db('forum')
        const founded = await db.collection('post').findOne({_id : new ObjectId(req.body)})

        
        if (founded.author === session.user.email) {
          const result = await db
            .collection("post")
            .deleteOne({ _id: new ObjectId(id) });
            if (result.deletedCount === 1) {
              res.status(200).json({ message: "ok" });
            } else {
              res.status(500).json({ message: "fail" });
            }
        } else {
          return res.status(500).json({message : "현재유저와 작성자 불일치"})
        }

        
    }
}