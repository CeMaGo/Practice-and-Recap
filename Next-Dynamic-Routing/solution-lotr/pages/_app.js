import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Lord of the Ring</title>
            </Head>
            <Component myProp={'hi spearmint'} {...pageProps} />
        </>
    );
}

