import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from 'next/head';
import { AdminLayout } from '../components/AdminLayout/AdminLayout';
import { Footer } from '../components/Footer/Footer';
import { Navbar } from '../components/Navbar/Navbar';
import '../styles/globals.css';

const App = ({ Component, pageProps, router }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            {
                router.pathname.startsWith("/admin")
                    ?
                    <>
                        <AdminLayout>
                            <Component {...pageProps} />
                        </AdminLayout>
                    </>
                    : <>
                        <Navbar />
                        <main className="min-h-2/3-screen flex flex-col justify-center">
                            <Component {...pageProps} />
                        </main>
                        <Footer />
                    </>
            }
        </SessionProvider>
    );
};

export default App;
