
import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import ListItem from "./ListItem";
export default async function list () {
const db = (await connectDB).db("forum")
const result  = await db.collection('post').find().toArray()

     return (
       <div className="list-bg">
         <ListItem result={result} />
       </div>
     );
}