import Image from 'next/image'
import styles from './page.module.css'
import { connectDB } from '@/util/database'

export default async function Home() {
  const client = await connectDB
  const db = client.db("forum")
  const result = await db.collection("post").find().toArray()
  console.log(result);

  return (
    <div>hello</div>  )
}
