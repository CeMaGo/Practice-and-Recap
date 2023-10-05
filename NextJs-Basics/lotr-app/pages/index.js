
import Link from "next/link";
import { introduction } from "@/resources/lib/data";

export default function HomePage() {
  return (
    <div>
      <h1>Lord of the Rings</h1>
      <h2>All Volumes</h2>
      <p>{introduction}</p>
      <Link href="/volumes">Volumes</Link>
    </div>
  );
}
