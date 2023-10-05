import Link from "next/link";


export default function volumesPage() {
    console.log("volumes Page");
    return (
        <div>
          <h2>All Titles</h2>
          <ul>
            <li>
          <Link href="/volumes/the-fellowship-of-the-ring">Volume1</Link>
            </li>
            <li>
          <Link href="/volumes/the-two-towers">Volume2</Link>
          </li> <li>
          <Link href="/volumes/the-return-of-the-king">Volume3</Link>
          </li>
          </ul>
        </div>
      )}
