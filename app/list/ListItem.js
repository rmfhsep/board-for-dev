'use client'
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";

export default function ListItem({ result }) {
const deleteHandler = () => {
    axios.delete('/api/post/delete').then((res) => {
        console.log(res)
    })
}
  return (
    <div>
      {result.map((post, idx) => {
        console.log(post._id);
        return (
          <div className="list-item" key={idx}>
            <Link
              href={`/detail/${post._id}`}
              style={{ textDecoration: "none" }}
            >
              <h4>{post.title}</h4>
            </Link>
            <Link href={`/edit/${post._id}`} style={{ textDecoration: "none" }}>
              🛠
            </Link>
            <span onClick={() => deleteHandler()}>🗑️</span>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}