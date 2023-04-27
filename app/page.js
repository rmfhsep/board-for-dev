import Image from 'next/image'
import styles from './page.module.css'
import { connectDB } from '@/util/database'

// 60초 지나면 다시 캐싱. 
// 페이지 단위로 캐싱할 때 
export const revalidate = 60;

export default async function Home() {
  const client = await connectDB
  const db = client.db("forum")
  const result = await db.collection("post").find().toArray()
  console.log(result);

  return (
    <div>hello</div>  )
}
