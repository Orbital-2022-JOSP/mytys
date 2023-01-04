import { useSession } from "next-auth/react";
import Head from 'next/head';
import { useRouter } from "next/router";
import React from "react";
import { Hero } from "../components/Hero/Hero";
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
            <Hero />
            <MailingList />
            <Steps />
            <Stats />
        </>
    );
};

export default Home;



