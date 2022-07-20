import Head from 'next/head';
import React from "react";
import { Features } from '../components/Features/Features';
import { JoinUsCTA } from "../components/JoinUsCTA/JoinUsCTA";
import { Stats } from "../components/Stats/Stats";
import { Team } from "../components/Team/Team";
import { WhoAreWe } from "../components/WhoAreWe/WhoAreWe";

const AboutUsPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>About Us - MYTYS</title>
            </Head>
            <WhoAreWe />
            <Features />
            <Team />
            <Stats />
            <JoinUsCTA />
        </>
    );
};

export default AboutUsPage;
