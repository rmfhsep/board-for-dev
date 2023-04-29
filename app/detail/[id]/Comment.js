'use client'
import { useState, useEffect } from "react";

export default function Comment ({id}) {
    const [comment, setComment] = useState('')
    const [commentList, setCommentList] = useState([])
    useEffect(() => {
      fetch(`/api/comment/list?id=${id}`)
        .then((r) => r.json())
        .then((res) => {
          setCommentList(res);
        });
    }, [commentList]);

    return (
      <div>
        <hr></hr>
        <div>
          {commentList.length < 1 ? '댓글을 불러 오고 있어요.':commentList.map((reply, idx) => {
            return <p key={idx}>{reply.content}</p>;
          })}
        </div>
        <input value={comment} onChange={(e) => setComment(e.target.value)} />
        <button
          onClick={() => {
            fetch("/api/comment/new", {
              method: "POST",
              body: JSON.stringify({ comment: comment, id: id }),
            }).then((res) => {
              if (res.status === 201) {
                alert("댓글 입력에 성공했습니다");
                setComment('')
              } else {
                alert("댓글 입력에 실패했습니다");
              }
            });
          }}
        >
          입력
        </button>
      </div>
    );
}