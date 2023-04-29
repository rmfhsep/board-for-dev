import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req,res) {
    const session = await getServerSession(req,res,authOptions)
    console.log("세션", session);
    if(req.method === "POST") {
        if(!session) {
            res.status(500).json({message : "로그인한 유저만 입력 가능합니다."})
        } else {
          const data = JSON.parse(req.body);
          console.log("데이타", data)
          const reqData = {
            content: data.comment,
            parent: new ObjectId(data.id),
            author: session.user.email,
          };
          const db = (await connectDB).db('forum')
          const result = await db.collection("comment").insertOne(reqData);
          res.status(201).json({message : "저장완료"})
        };


       


    }
}