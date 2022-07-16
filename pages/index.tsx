import { useSession } from "next-auth/react";
import Head from 'next/head';
import { useRouter } from "next/router";
import React from "react";
import { LandingPage_main } from "../components/LandingPage_main/LandingPage_main";
import { MailingList } from "../components/MailingList/MailingList";
import { Stats } from "../components/Stats/Stats";
import { Steps } from "../components/Steps/Steps";

const Home: React.FC = () => {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
        router.pathname === pathname;

    const { data: session, status } = useSession();

    return (
        <>
            <Head>
                <title>Home - MYTYS</title>
            </Head>
            <LandingPage_main />
            <MailingList />
            <Steps />
            <Stats />
        </>
    );
};

export default Home;



