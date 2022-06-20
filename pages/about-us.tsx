import React from "react";
import { ContactUs } from "../components/ContactUs/ContactUs";
import { JoinUsCTA } from "../components/JoinUsCTA/JoinUsCTA";
import { Stats } from "../components/Stats/Stats";
import { Team } from "../components/Team/Team";
import { WhoAreWe } from "../components/WhoAreWe/WhoAreWe";

const AboutUsPage: React.FC = () => {
    return (
        <>
            <WhoAreWe />
            <Team />
            <Stats />
            <JoinUsCTA />
            <ContactUs />
        </>
    );
};

export default AboutUsPage;
