import Head from 'next/head';
import React from "react";
import { HowItWorks1 } from '../components/HowItWorks1/HowItWorks1';
import { Steps } from "../components/Steps/Steps";
import { Testimonials } from "../components/Testimonials/Testimonials";

const HowItWorksPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>How it works - MYTYS</title>
            </Head>
            <HowItWorks1 />
            <Steps />
            <Testimonials />
        </>
    );
};

export default HowItWorksPage;
