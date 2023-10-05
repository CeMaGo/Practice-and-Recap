import { volumes } from "@/resources/lib/data";
import Link from "next/link";
import Image from "next/image";

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
  {fellowshipVolume.books?.map((book) => (
    <li key={book.ordinal}>{book.title}</li>
  ))}
</ul>

      <Image 
      src={`/public/${fellowshipVolume.title}.png`}
      width={140} 
      height={230}

      />
    <Link href="/volumes"> ⬅ All Volumes</Link>
    </div>
  );
}