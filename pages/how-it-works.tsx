import React from "react";
import { Steps } from "../components/Steps/Steps";
import { Testimonials2 } from "../components/Testimonials2/Testimonials2";
import { HowItWorks1 } from '../components/HowItWorks1/HowItWorks1';

const HowItWorksPage: React.FC = () => {
    return (
        <>
            <HowItWorks1 />
            <Steps />
            <Testimonials2 />
        </>
    );
};

export default HowItWorksPage;
