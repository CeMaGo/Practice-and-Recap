import Link from 'next/link';
import { useRouter } from 'next/router';
import { introduction, volumes } from '../../lib/data';

export default function VolumesPage() {
    const router = useRouter();

    const handleClick = () => {
        const randomIdx = Math.floor(Math.random() * volumes.length);
        const randomVolume = volumes[randomIdx];
        const slug = randomVolume.slug;
        const wholeUrl = `/volumes/${slug}`;
        router.push(wholeUrl);
    };

    return (
        <>
            <h1>Lord of the Rings</h1>
            <p>{introduction}</p>
            <ul style={{ margin: '20px 0' }}>
                {volumes.map(volume => {
                    return (
                        <li key={volume.slug}>
                            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
                        </li>
                    );
                })}
            </ul>
            <button onClick={handleClick}>Get random Volume</button>
        </>
    );
}

