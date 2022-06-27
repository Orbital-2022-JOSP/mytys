import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { FAQ } from "../components/FAQ/FAQ";
import { Features } from "../components/Features/Features";
import { Hero } from '../components/Hero/Hero';
import { Hero3 } from "../components/Hero3/Hero3";
import { Stats } from "../components/Stats/Stats";
import { Steps } from "../components/Steps/Steps";

import { LandingPage_main } from "../components/LandingPage_main/LandingPage_main";
import { MailingList } from "../components/MailingList/MailingList";

const Home: React.FC = () => {
    const router = useRouter();
    const isActive: (pathname: string) => boolean = (pathname) =>
        router.pathname === pathname;

    const { data: session, status } = useSession();

    return (
        <>
            <FAQ />
            <Hero3 />
            <Hero />
            <Features />
            <LandingPage_main />
            <MailingList />
            <Steps />
            <Stats />
        </ >
    );
};

export default Home;



