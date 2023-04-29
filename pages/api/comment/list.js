import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req,res) {
    const db = (await connectDB).db('forum')
    const id = req.query.id
    const result = await db
      .collection("comment")
      .find({
        parent: new ObjectId(id),
      })
      .toArray();
      console.log(result)
    res.status(200).json(result)
}