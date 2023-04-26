'use client'
import Link from "next/link";
import { useEffect } from "react";
import axios from "axios";

export default function ListItem({ result }) {
const deleteHandler = (e,id) => {
  console.log("id", id);
  // fetch('api/post/delete', {
  //   method : "POST",
  //   body : id
  // }).then((res) => {
  //   if(res.status === 200) {
  //     alert('삭제 성공')
  //     e.target.parentElement.style.opacity = 0 ;
  //     setTimeout(() => {
  //       e.target.parentElement.style.display = 'none';
  //     }, 1000)
  //   }
  // })
  // .catch((error) => {
  //   console.log(error)
  // })
  fetch('/api/test?id=1')
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
              📝
            </Link>
            <span onClick={(e) => deleteHandler(e, post._id)}>🗑️</span>
            <p>{post.content}</p>
          </div>
        );
      })}
    </div>
  );
}