import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../components/Footer/Footer";
import { Hero2 } from "../components/Hero2/Hero2";
import { Navbar } from '../components/Navbar/Navbar';
import { NavBar_Homepage } from "../components/NavBar_Homepage/NavBar_Homepage";
import '../styles/globals.css';


const App = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider session={pageProps.session}>
            <Head>
                <title>MyTYS</title>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" /> */}
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
            </Head>
            <Navbar />
            <Component {...pageProps} />
            <Footer /> 
        </SessionProvider>
    );
};

export default App;
