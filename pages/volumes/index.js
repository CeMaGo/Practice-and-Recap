import Link from "next/link";


export default function volumesPage() {
    console.log("volumes Page");
    return (
        <div>
          <h1>Hello from the Volumes Index Page</h1>
          <Link href="/volumes/the-fellowship-of-the-ring">Volume1</Link><br/>
          <Link href="/volumes/the-two-towers">Volume2</Link><br/>
          <Link href="/volumes/the-return-of-the-king">Volume3</Link><br/>
        </div>
      );
}