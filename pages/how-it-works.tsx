import Head from 'next/head';
import React from "react";
import { HowItWorks1 } from '../components/HowItWorks1/HowItWorks1';
import { Steps } from "../components/Steps/Steps";
import { Testimonials2 } from "../components/Testimonials2/Testimonials2";

const HowItWorksPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>How it works - MYTYS</title>
            </Head>
            <HowItWorks1 />
            <Steps />
            <Testimonials2 />
        </>
    );
};

export default HowItWorksPage;
