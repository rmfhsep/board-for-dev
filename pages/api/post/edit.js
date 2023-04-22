import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler (req,res) {
    if(req.method === "POST") {
          const post = req.body;
          console.log("포스트", post);
          if (post.title === "" || post.content === "") {
            return res.status(500).json("FAIL");
          }

          try {
            const newPost = {
                title : post.title,
                content : post.content
            }
            const db = (await connectDB).db("forum");
            const result = await db
              .collection("post")
              .updateOne({ _id: new ObjectId(post._id) }, { $set: newPost });
            console.log("리절트", result);
            return res.status(200).send("OK")
          } catch (err) {
            return err;
          }
        
    }
}