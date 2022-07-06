import Head from 'next/head';
import React from "react";
import { DownloadCTA } from "../components/DownloadCTA/DownloadCTA";
import { Features } from "../components/Features/Features";

const FeaturesPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>Our Features - MYTYS</title>
            </Head>
            <Features />
            <DownloadCTA />
        </>
    );
};

export default FeaturesPage;