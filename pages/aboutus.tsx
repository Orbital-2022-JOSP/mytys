import Head from 'next/head';
import React from "react";
import { JoinUsCTA1 } from "../components/JoinUsCTA1/JoinUsCTA1";
import { Stats } from "../components/Stats/Stats";
import { Team1 } from "../components/Team1/Team1";
import { WhoAreWe } from '../components/WhoAreWe/WhoAreWe';

const AboutUsPage1: React.FC = () => {
    return (
        <>
            <Head>
                <title>About Us - MYTYS</title>
            </Head>
            <WhoAreWe />
            <Team1 />
            <Stats />
            <JoinUsCTA1 />
        </>
    );
};

export default AboutUsPage1;
