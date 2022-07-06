import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { AdminLayout } from '../components/AdminLayout/AdminLayout';
import { FooterWithContent } from "../components/FooterWithContent/FooterWithContent";
import { Navbar } from '../components/Navbar/Navbar';
import '../styles/globals.css';

const App = ({ Component, pageProps, router }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
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
