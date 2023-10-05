import { volumes } from "@/resources/lib/data";
import Link from "next/link";

export default function TheFellowshipOfTheRingsPage() {
  const fellowshipVolume = volumes.find(({slug})=> slug === "the-fellowship-of-the-ring"
  );
  console.log("fellowshipVolume:", fellowshipVolume)
  // Handle case where the volume is not found
  if (!fellowshipVolume) {
    return (
      <div>
        <h1>Volume Not Found</h1>
        <p>The Fellowship of the Rings Volume was Not Found.</p>
        <Link href="/volumes"> ⬅️ All Volumes</Link>
      </div>
    );
  }
  
  // Handle the else, or when the Volumes was successfully found
  return (
    <div>
      <h1>{fellowshipVolume.title}</h1>
      <p>{fellowshipVolume.description}</p>
      <ul>
      <li>List with book.ordinal and book.title</li>
      {/* {fellowshipVolume.books?.map(({book}) */}
      {/* =>    */}
     {/* ( <li key={book.ordinal} >{book.title}</li>))} */}
      </ul>
    <Link href="/volumes" > ⬅ All Volumes</Link>
    </div>
  );
}