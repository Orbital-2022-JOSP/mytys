import React from "react";
import { Steps } from "../components/Steps/Steps";
import { Testimonials } from "../components/Testimonials/Testimonials";
import { HowItWorks } from '../components/HowItWorks/HowItWorks';

const HowItWorksPage: React.FC = () => {
    return (
        <>
            <HowItWorks />
            <Steps />
            <Testimonials />
        </>
    );
};

export default HowItWorksPage;
