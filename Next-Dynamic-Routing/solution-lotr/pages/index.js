import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            <Head>
                <title>Lord of the Ring Overview</title>
            </Head>
            <main>
                <h1>Lord of the Rings</h1>
                <Link href="/volumes">Go to the volumes</Link>
            </main>
        </>
    );
}

