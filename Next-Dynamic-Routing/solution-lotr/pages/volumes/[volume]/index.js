import { volumes } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function VolumeDetails() {
    const router = useRouter();
    const volumeName = router.query.volume;

    const volume = volumes.find(v => v.slug === volumeName);
    const volumeIdx = volumes.findIndex(v => v.slug === volumeName);

    if (volume === undefined) {
        return null;
    }

    const nextIndex = volumeIdx + 1;
    const prevIndex = volumeIdx - 1;

    const nextSlug = volumes[nextIndex]?.slug;
    const prevSlug = volumes[prevIndex]?.slug;

    const prevVolume = `/volumes/${prevSlug}`;
    const nextVolume = `/volumes/${nextSlug}`;

    return (
        <main>
            <Link href="/volumes">← All Volumes</Link>
            <h1>{volume.title}</h1>
            <p>{volume.description}</p>
            <ul style={{ margin: '20px 0' }}>
                {volume.books.map((book, idx) => {
                    return (
                        <li key={idx}>
                            {book.ordinal} {book.title}
                        </li>
                    );
                })}
            </ul>
            <div>
                <Image src={volume.cover} alt={volume.title} width="140" height="230"></Image>
            </div>
            {prevSlug && (
                <Link href={prevVolume} style={{ marginRight: '20px' }}>
                    Previous Volume
                </Link>
            )}
            {nextSlug && <Link href={nextVolume}>Next Volume</Link>}
        </main>
    );
}
