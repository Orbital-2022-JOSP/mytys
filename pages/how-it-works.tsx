import Head from 'next/head';
import React from "react";
import { HowItWorks } from '../components/HowItWorks/HowItWorks';
import { Steps } from "../components/Steps/Steps";
import { Testimonials } from "../components/Testimonials/Testimonials";

const HowItWorksPage: React.FC = () => {
    return (
        <>
            <Head>
                <title>How it works - MYTYS</title>
            </Head>
            <HowItWorks />
            <Steps />
            <Testimonials />
        </>
    );
};

export default HowItWorksPage;
