import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { AdminLayout } from '../components/AdminLayout/AdminLayout';
import { FooterWithContent } from "../components/FooterWithContent/FooterWithContent";
import { Navbar } from '../components/Navbar/Navbar';
import '../styles/globals.css';

const App = ({ Component, pageProps, router }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <title>MyTYS</title>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" /> */}
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
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
                        <FooterWithContent />
                    </>
            }
        </SessionProvider>
    );
};

export default App;
