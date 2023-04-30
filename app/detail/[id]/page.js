import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb"
import Comment from "./Comment"
import { notFound } from "next/navigation"
export default async function Detail(props) {
    const db = (await connectDB).db("forum")
    const id = new ObjectId(props.params.id)

    const result = await db.collection("post").findOne({ _id: id });

    if(result === null) {
      return notFound()
    }

    return (
      <>
        <h4>상세페이지</h4>
        {result ? (
          <>
            <div>
              <h4>{result.title}</h4>
              <p>{result.content}</p>
              <Comment id ={result._id.toString()}/>
            </div>
          </>
        ) : (
          <div>게시물이 없습니다.</div>
        )}
      </>
    );
}