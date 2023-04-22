
import axios from "axios";
import { connectDB } from "@/util/database";
import { useRouter } from "next/navigation";
import { ObjectId } from "mongodb";
import handleSubmit from "../handleSubmit";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  const id = new ObjectId(props.params.id);

  const result = await db.collection("post").findOne({ _id: id });
  console.log(result);

  return (
    <div className="p-20">
      <h4>글 수정</h4>
      <form action="/api/post/edit" method="POST">
        <input
          className="title"
          name="title"
          placeholder="글 제목을 입력해 주세요."
          defaultValue={result.title}
        />
        <input
          className="content"
          name="content"
          placeholder="내용을 입력해 주세요."
          defaultValue={result.content}
        />
        <input
          style={{display: "none"}}
          className="_id"
          name="_id"
          placeholder="내용을 입력해 주세요."
          defaultValue={result._id.toString()}
        />
        <button type="submit">수정</button>
      </form>
    </div>
  );
}
