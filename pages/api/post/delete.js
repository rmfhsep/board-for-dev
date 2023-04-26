import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler (req, res) {
    if(req.method === "POST") {
        const id = req.body
        const db = (await connectDB).db('forum')
        const result = await db
          .collection("post")
          .deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 1) {
          res.status(200).json({ message: "ok" });
        } else {
          res.status(500).json({ message: "fail" });
        }
    }
}