import Head from 'next/head';
import { NotFound } from '../components/NotFound/NotFound';

export default function Custom404() {
    return <>
        <Head>
            <title>Content Not Found - MYTYS</title>
        </Head>
        <NotFound />
    </>
}