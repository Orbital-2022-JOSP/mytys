import { ServerError } from '../components/ServerError/ServerError';
import Head from 'next/head';

export default function Custom500() {
    return <>
        <Head>
            <title>Server Error - MYTYS</title>
        </Head>
        <ServerError />
    </>
}