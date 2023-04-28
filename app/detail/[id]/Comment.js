'use client'

import { useState } from "react";

export default function Comment () {
    const [comment, setComment] = useState('')
    return (
      <div>
        <div>댓글목록</div>
        <input onChange={(e) => setComment(e.target.value)}/>
        <button>입력</button>
      </div>
    );
}